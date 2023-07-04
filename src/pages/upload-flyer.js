
import React, { useState } from "react"
import Layout from "../components/layout"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Button, Container } from "reactstrap"
import { FaCheck, FaImage } from "react-icons/fa";
import "./upload-flyer.css"

const UploadFlyerPage = (props) => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [formState, setFormState] = useState({
        link1: '',
        flyer1: '',
        link2: '',
        flyer2: '',
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
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }

    };

    const handleOnSubmit = e => {

        console.log(formState);

        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        setFormState({
            ...formState,
        })

        const data = {
            link1: formState.link1,
            link2: formState.link2,
            flyer1: formState.flyer1,
            flyer2: formState.flyer2

        }
        const formData = new FormData();
        formData.append('file', formState.flyer1);
        //data.flyer2.append('file', formState.flyer2);
        console.log(data);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios({
            config,
            method: "post",

            // prod mode
            url: "https://wilshiregfs.com/api/upload",

            // dev mode
            // url: "http://localhost:3999/api/photo",
            data: formData
        })
            .then(r => {
                handleServerResponse(true, "Thanks, we appreciate your feedback!", form);
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
        const preview = URL.createObjectURL(image);

        setFormState({
            ...formState,
            [name]: image
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
                <span>Hello, Alonzo</span>
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
                                        { formState.flyer1 ? <img className="preview-img"src={previewState.flyer1} /> :
                                            <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        }
                                        <Button className="btn btn-outline" name="flyer1" onClick={handleClick} >
                                            Select
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

                                        { formState.flyer2 ? <img className="preview-img"src={previewState.flyer2} /> :
                                        <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        }
                                        <Button className="btn btn-outline" name="flyer2" onClick={handleClick} disabled={serverState.submitting} >
                                            Select
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
                                    <Button className="btn btn-primary btn-lg" disabled={!formComplete} onClick={handleOnSubmit} type="submit">
                                        Save
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
