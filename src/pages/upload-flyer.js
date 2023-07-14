
import React, { useState } from "react"
import "./upload-flyer.css"
import Layout from "../components/layout"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Button, Container } from "reactstrap"
import { FaImage } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { right } from "@popperjs/core"

const Comp = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (<Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret size="sm">Options</DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Clear</DropdownItem>
            <DropdownItem>Remove</DropdownItem>
        </DropdownMenu>
    </Dropdown>)
}

const UploadFlyerPage = (props) => {

    const flyerObj = { flyer: undefined, link: '', flyerUrl: undefined };

    const [formState2, setFormState2] = useState({
        data: [flyerObj]
    });
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [formComplete, setFormComplete] = useState(false);
    const [addNewEnabled, setAddNewEnabled] = useState(true);
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

                setFormState2({ data });

            }

        }).catch(response => {

            console.log(response);

        });

    }, []);

    React.useEffect(() => {

        // Check if works
        const hasEmptyValue = Object.values(formState2).some(val => !val);
        setFormComplete(!hasEmptyValue)


    }, [formState2]);

    const handleClick = (_, index) => {

        hiddenFileInputRefs.current[index].click();

    };



    const handleOnSubmit = e => {

        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });

        const formData = new FormData();

        formState2.data.forEach((data) => {

            if (data.flyer && data.link) {

                formData.append('file', data.flyer);
                formData.append('link', data.link);

            }

        })

        axios({
            method: "post",

            // prod mode
            // url: "https://wilshiregfs.com/api/photo",
            url: "https://alonzoalden.com/api/photo",

            // dev mode
            // url: "http://localhost:3999/api/photo",
            data: formData
        }).then(r => {

            handleServerResponse(true, "Thanks!", form);

        }).catch(r => {

            handleServerResponse(false, r.response, form);

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

    const isAddNewButtonEnabled = () => {

        const lastItem = formState2.data[formState2.data.length - 1];

        const lastItemCompleted = (formState2.data && formState2.data.length < 2) || (lastItem.flyerUrl && lastItem.link);
        const enabled = lastItemCompleted && formState2.data.length < 8;
        setAddNewEnabled(!!enabled);
        return !!enabled;

    }

    const onAddNewFlyer = () => {

        if (isAddNewButtonEnabled()) {

            const data = [...formState2.data];
            data.push(flyerObj)
            setFormState2({ data })

        }

    }

    const onInputChange = (event, index) => {

        const { value } = event.target;
        const item = formState2.data[index];
        const newItem = {
            ...item,
            link: value,
        };
        const newData = [...formState2.data];
        newData[index] = newItem;

        setFormState2({
            data: newData
        })

    };

    const onSelectFile = (event, index) => {

        if (!event.target.files || event.target.files.length === 0) {

            const item = formState2.data[index];
            const newItem = {
                flyer: undefined,
                link: item.link,
                flyerUrl: undefined
            };
            const newData = [...formState2.data];
            newData[index] = newItem;


            setFormState2({
                data: newData
            })
            return;

        }

        const { name } = event.target;
        const image = event.target.files[0];
        const renamedImage = new File([image], `flyer${index + 1}.png`, {
            type: image.type,
        });

        const flyerUrl = URL.createObjectURL(renamedImage);

        const newItem = {
            flyer: renamedImage,
            link: formState2.data[index].link,
            flyerUrl
        };
        const newData = [...formState2.data];
        newData[index] = newItem;

        setFormState2({
            data: newData
        })

    }

    const onRemove = (_, index) => {

        const confirmation = window.confirm("Are you sure you want to remove this section?");
        if (confirmation) {

            const data = [...formState2.data];
            data.splice(index, 1);

            setFormState2({
                data
            });

        }

    }
    const style = { color: "#dadada", fontSize: "64px" };
    const styleAddButton = { color: "#dadada", fontSize: "128px" };

    return (
        <Layout>
            <div className="logo">
                <a href="https://wilshiregfs.com" target="blank"><img className="logo-img" src={Logo} /></a>
                <span>Hello, Alonzo </span>
            </div>
            <Container>
                {<>
                    <div className="upload-page-container">
                        <h1>WGFS: Upload Flyers</h1>
                        <h5>Please enter a link to the meeting and upload an image, or add a new flyer.</h5>
                        <Button
                            color="primary"
                            outline
                            onClick={onAddNewFlyer}
                            style={{ marginRight: '5px' }}
                        >
                            Add Flyer
                        </Button>
                        { addNewEnabled ? '' :  <span>Please complete all flyers before adding a new one.</span> }
                        <form>
                            <div className="upload-section-container">
                                {(() => {
                                    return formState2.data.map((data, i) => (

                                        <div className="upload-section" key={i}>

                                            {/* <Comp /> */}

                                            <h3>Flyer {i + 1}</h3>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Meeting Link</label>
                                                <input type="text" name={'text-' + i} className="form-control"
                                                    value={data.link}
                                                    placeholder="Enter the link to the meeting"
                                                    onChange={(event) => onInputChange(event, i)}
                                                    required
                                                />
                                            </div>
                                            <label>Meeting Image</label>
                                            {data.flyerUrl ? <img className="preview-img" src={data.flyerUrl} /> :
                                                <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                            }
                                            <Button className="btn btn-outline" onClick={(event) => handleClick(event, i)} >
                                                {data.flyerUrl ? 'Change' : 'Select'}
                                            </Button>
                                            <input
                                                type="file"
                                                name={'file-' + i}
                                                accept="image/png, image/gif, image/jpeg"
                                                ref={el => hiddenFileInputRefs.current[i] = el}
                                                onChange={(event) => onSelectFile(event, i)}
                                                style={{ display: 'none' }}
                                                required
                                            />
                                            <div className="mt-2"><Button color="link" onClick={(event) => onRemove(event, i) }>Remove</Button></div>
                                        </div>

                                    ))

                                })()}

                                {/* <div className="upload-section placeholder-add-button">
                                    <FaPlusCircle style={styleAddButton} onClick={onAddNewFlyer} /><div>{addNewEnabled ? 'Add a new flyer' : 'Please finish last flyer to add a new one'} </div>
                                </div> */}
                            </div>

                            <div>
                                {formComplete && <h5 className="mt-4">This is the order the flyers will appear on the website. If everything looks correct, please save.</h5>}
                                <Button className="btn btn-primary btn-lg" onClick={handleOnSubmit} type="submit" disabled={serverState.submitting}>
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
