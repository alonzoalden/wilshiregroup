
import React, { useState } from "react"
import "./upload-flyer.css"
import Layout from "../components/layout"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Button, Container } from "reactstrap"
import { FaImage } from "react-icons/fa";
import JSONLinkData from "../../../assets/WGFS-link.json"

const UploadFlyerPage = (props) => {

    React.useEffect(() => {

        const images = require.context('../../../assets', true, /\.(png|jpg|jpeg)$/);

        let initialPreviewState = {};
        images.keys().forEach((elem) => {

            const name = elem.split('WGFS-')[1].split('.')[0];

            initialPreviewState = {
                ...initialPreviewState,
                [name]: images(`${elem}`).default
            }
        })

        setPreviewState({
            ...initialPreviewState
        })

    }, []);



    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [formState, setFormState] = useState({
        flyer1: undefined,
        flyer2: undefined,
        link1: JSONLinkData && JSONLinkData.links[0] || '',
        link2: JSONLinkData && JSONLinkData.links[1] || ''
    });
    const [previewState, setPreviewState] = useState({
        flyer1: '',
        flyer2: ''
    });
    const [formComplete, setFormComplete] = useState(false);

    const hiddenFileInput = {
        flyer1: React.useRef(null),
        flyer2: React.useRef(null)
    }

    React.useEffect(() => {

        const hasEmptyValue = Object.values(formState).some(val => !val);
        setFormComplete(!hasEmptyValue)

    }, [formState]);

    const handleClick = event => {

        const { name } = event.target;
        hiddenFileInput[name].current.click();

    };

    const onInputChange = event => {

        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });

    };

    const handleServerResponse = (ok, msg, form) => {

        setServerState({
            submitting: false,
            // status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }

    };

    const handleOnSubmit = e => {

        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        setFormState({
            ...formState,
        })

        const formData = new FormData();
        formData.append('file', formState.flyer1);
        formData.append('file', formState.flyer2);
        formData.append('link', formState.link1);
        formData.append('link', formState.link2);
        formData.append('updateFiles', []);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios({
            config,
            method: "post",

            // prod mode
            // url: "https://wilshiregfs.com/api/photo",

            // dev mode
            url: "http://localhost:3999/api/photo",
            data: formData
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response, form);
            });

    };
    const onSelectFile = event => {

        if (!event.target.files || event.target.files.length === 0) {

            setFormState({
                ...formState,
                [name]: undefined
            });
            setPreviewState({
                ...previewState,
                [name]: undefined
            });
            return;

        }

        const { name } = event.target;
        const image = event.target.files[0];
        const renamedImage = new File([image], `${name}.png`, {
            type: image.type,
          });

        const preview = URL.createObjectURL(renamedImage);

        setFormState({
            ...formState,
            [name]: renamedImage
        });

        setPreviewState({
            ...previewState,
            [name]: preview
        })

    }

    const style = { color: "#dadada", fontSize: "64px" };
    // const styleCheck = { color: "0d6efd", fontSize: "12px" };
    return (
        <Layout>
            <div className="logo">
                <a href="https://wilshiregfs.com" target="blank"><img className="logo-img" src={Logo} /></a>
                <span>Hello, Alonzo </span>
            </div>
            <Container>
                {!serverState.status ? <>
                    <div className="upload-page-container">
                        <h1>WGFS: Upload Flyers</h1>
                        <h5>Please enter a link to the meeting and upload a flyer for each section.</h5>
                        <form>
                            <div className="upload-section-container">
                                <div className="upload-section">
                                    <h3>Flyer 1</h3>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Meeting Link</label>
                                            <input type="text" name="link1" className="form-control"
                                                value={formState.link1}
                                                placeholder="Enter the link to the meeting"
                                                onChange={onInputChange}
                                                required
                                                />
                                        </div>
                                        <label>Meeting Image</label>
                                        { previewState.flyer1 ? <img className="preview-img" src={previewState.flyer1} /> :
                                            <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        }
                                        <Button className="btn btn-outline" name="flyer1" onClick={handleClick} >
                                            { previewState.flyer1 ? 'Change' : 'Select' }
                                        </Button>
                                        <input
                                            type="file"
                                            name="flyer1"
                                            accept="image/png, image/gif, image/jpeg"
                                            ref={hiddenFileInput.flyer1}
                                            onChange={onSelectFile}
                                            style={{display: 'none'}}
                                            required
                                        />
                                        {serverState.status && (
                                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                                {serverState.status.msg}
                                            </p>
                                        )}
                                </div>
                                <div className="upload-section">
                                    <h3>Flyer 2</h3>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Meeting Link</label>
                                            <input type="text" name="link2" className="form-control"
                                                value={formState.link2}
                                                placeholder="Enter the link to the meeting"
                                                onChange={onInputChange}
                                                required
                                                 />
                                        </div>
                                        {/* <label>Meeting Image { selectedFile && <FaCheck style={styleCheck}/> }</label>  */}
                                        <label>Meeting Image </label>

                                        { previewState.flyer2 ? <img className="preview-img"src={previewState.flyer2} /> :
                                        <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        }
                                        <Button className="btn btn-outline" name="flyer2" onClick={handleClick} disabled={serverState.submitting} >
                                            { previewState.flyer2 ? 'Change' : 'Select' }
                                        </Button>
                                        <input
                                            type="file"
                                            name="flyer2"
                                            accept="image/png, image/gif, image/jpeg"
                                            ref={hiddenFileInput.flyer2}
                                            onChange={onSelectFile}
                                            style={{display: 'none'}}
                                            required
                                        />
                                        {serverState.status && (
                                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                                {serverState.status.msg}
                                            </p>
                                        )}
                                    </div>
                                    </div>
                            <div>
                                    { formComplete && <h5 className="mt-4">If everything looks correct, please save.</h5> }
                                    <Button className="btn btn-primary btn-lg" onClick={handleOnSubmit} type="submit" disabled={serverState.submitting}>
                                        { serverState.submitting ? 'Saving...' : 'Save' }
                                    </Button>
                                </div>
                            </form>

                    </div>
                </>
                    :
                    <>
                        <div className="mt-5"><a href="https://wilshiregfs.com" target="blank"><img src={Logo} /></a></div>
                        <h4 className="mt-5">Thank you, We appreciate your review.</h4>
                    </>
                }
            </Container>
        </Layout>
    )
}

export default UploadFlyerPage
