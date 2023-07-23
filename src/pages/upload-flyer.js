
import React, { useState } from "react"
import "./upload-flyer.css"
import Layout from "../components/layout"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Button, Container } from "reactstrap"
import { FaImage, FaTimesCircle } from "react-icons/fa";

const UploadFlyerPage = (props) => {

    const flyerObj = { flyer: undefined, link: '', flyerUrl: undefined };
    const [formState, setFormState] = useState({
        data: [flyerObj]
    });
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [formComplete, setFormComplete] = useState(false);
    const [addNewEnabled, setAddNewEnabled] = useState(true);
    const [maxReachedEnabled, setMaxReachedEnabled] = useState(false);
    const hiddenFileInputRefs = React.useRef([]);

    React.useEffect(() => {

        axios({
            method: "get",

            // prod mode
            // url: "https://wilshiregfs.com/api/photo",
            url: "https://alonzoalden.com/api/photo",

            // dev mode
            // url: "http://localhost:3999/api/photo",

        }).then(({ data }) => {

            if (data && data.length) {

                setFormState({ data });

            }

        }).catch(response => {

            console.log(response);

        });

    }, []);

    React.useEffect(() => {

        const hasEmptyValue = formState.data.some((flyer) => !flyer.flyerUrl || !flyer.link );

        setFormComplete(!hasEmptyValue)


    }, [formState]);


    const createImageFile = (file, type) => {

        const fileName = `WGFS-Flyer-${new Date().toISOString()}-${Math.floor(Math.random() * 100000)}`;
        const formattedFileName = fileName.replaceAll(':', '').replaceAll('.', '');

        return new File([file], `${formattedFileName}.png`,  { type });

    }

    const handleClick = (_, index) => {

        hiddenFileInputRefs.current[index].click();

    };

    const handleOnSubmit = e => {

        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });

        const formData = new FormData();

        formState.data.forEach((data) => {

            if (data.flyer) {

                formData.append('file', data.flyer);
                formData.append('flyerName', data.flyer.name);

            } else if (data.flyerUrl) {

                const parseName = () => data.flyerUrl.split('assets/')[1].split('.webp')[0];
                formData.append('flyerName', parseName());

            }
            if (data.link) {

                formData.append('link', data.link);

            }

        });
        axios({
            method: "post",

            // prod mode
            // url: "https://wilshiregfs.com/api/photo",
            url: "https://alonzoalden.com/api/photo",

            // dev mode
            // url: "http://localhost:3999/api/photo",
            data: formData
        }).then(r => {

            handleServerResponse(true, "Thanks!");

        }).catch(r => {

            handleServerResponse(false, r.response);

        });

    };

    const handleServerResponse = (ok, msg) => {

        setTimeout(() => {

            setServerState({
                submitting: false,
                status: { ok, msg }
            });

        }, 2000)

    };

    const onAddNewFlyer = () => {

        const data = [...formState.data];
        const underMax = data.length < 8;

        if (formComplete && underMax) {

            data.push(flyerObj)
            setFormState({ data })
            setAddNewEnabled(true);

        } else {

            if (underMax) {

                setAddNewEnabled(false);

            } else {

                setMaxReachedEnabled(true);

            }

        }

    }

    const onInputChange = (event, index) => {

        const { value } = event.target;
        const item = formState.data[index];
        const newItem = {
            ...item,
            link: value,
        };
        const newData = [...formState.data];
        newData[index] = newItem;

        setFormState({
            data: newData
        })

    };

    const onSelectFile = (event, index) => {

        if (!event.target.files || event.target.files.length === 0) {

            const item = formState.data[index];
            const newItem = {
                ...item,
                flyer: undefined,
                flyerUrl: undefined
            };

            const newData = [...formState.data];
            newData[index] = newItem;

            setFormState({
                data: newData
            })
            return;

        }

        const image = event.target.files[0];
        const renamedImage = createImageFile(image, image.type);

        const flyerUrl = URL.createObjectURL(renamedImage);

        const newItem = {
            flyer: renamedImage,
            flyerUrl,
            link: formState.data[index].link
        };
        const newData = [...formState.data];
        newData[index] = newItem;

        setFormState({
            data: newData
        })

    }

    const onRemove = (_, index) => {

        const confirmation = window.confirm(`Are you sure you want to remove Flyer ${index + 1}?`);
        if (confirmation) {

            const data = [...formState.data];
            data.splice(index, 1);

            setFormState({
                data
            });
        }

    }

    const style = { color: "#dadada", fontSize: "64px" };
    const styleIcon = { color: "#9a9a9a", fontSize: "18px", marginRight: "5px" };

    return (
        <Layout>
            <div className="logo">
                <a href="https://wilshiregfs.com" target="blank"><img className="logo-img" src={Logo} /></a>
                <span>Hello </span>
            </div>
            <Container>
                {<>
                    <div className="upload-page-container">
                        <h1>WGFS: Upload Flyers</h1>
                        <h5>Please enter a link to the meeting and upload an image, or add a new flyer. This is the order the flyers will appear on the website.</h5>
                        <Button
                            className="btn btn-outline"
                            onClick={onAddNewFlyer}
                            style={{ marginRight: '5px' }}
                        >
                            Add Flyer
                        </Button>
                        {(addNewEnabled || formComplete) ? '' : <span>Please complete all flyers before adding a new one.</span>}
                        {maxReachedEnabled && <span>You have reached the maximum amount of flyers.</span>}
                        <form>
                            <div className="upload-section-container">
                                {(() => {
                                    return formState.data.map((data, i) => (
                                        <div className="upload-section" key={i}>
                                            <div className="title-container">
                                            <h3>Flyer {i + 1}</h3>
                                            <div className="link-color" onClick={(event) => onRemove(event, i)}> <FaTimesCircle style={styleIcon}/>Remove</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Meeting Link</label>
                                                <input type="text" name={'text-' + i} className="form-control"
                                                    value={data.link}
                                                    placeholder="Enter the link to the meeting"
                                                    onChange={(event) => onInputChange(event, i)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Meeting Image</label>
                                                <Button color="primary" outline onClick={(event) => handleClick(event, i)} >
                                                    {data.flyerUrl ? 'Change' : 'Select'}
                                                </Button>
                                            </div>
                                            {  data.flyerUrl ? <img className="preview-img" src={data.flyerUrl} /> :
                                                <div className="placeholder-image">
                                                    <FaImage style={style} /><div>Please select a flyer</div>
                                                </div>
                                            }
                                            <input
                                                type="file"
                                                name={'file-' + i}
                                                accept="image/png, image/gif, image/jpeg"
                                                ref={el => hiddenFileInputRefs.current[i] = el}
                                                onChange={(event) => onSelectFile(event, i)}
                                                style={{ display: 'none' }}
                                                required
                                            />
                                        </div>
                                    ))
                                })()}
                            </div>
                            <div>
                                <h5 className="mt-4">{formComplete ? 'If everything looks correct, please save.'
                                : 'Please finish updating flyers before saving.'}</h5>
                                <Button className="btn btn-primary btn-lg" onClick={handleOnSubmit} type="submit" disabled={serverState.submitting || !formComplete}>
                                    {serverState.submitting ? 'Saving...' : 'Save'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </>}
            </Container>
        </Layout>
    )
}

export default UploadFlyerPage
