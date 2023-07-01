
import React, { useState } from "react"
import Layout from "../components/layout"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Container } from "reactstrap"
import StarRatingComponent from "react-star-rating-component"
import "./upload-flyer.css"
import { FaImage } from "react-icons/fa";

const UploadFlyerPage = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [rating, setRating] = useState(5);
    const [formState, setFormState] = useState({
        link1: '',
        flyer1: '',
        link2: '',
        flyer2: ''
    });

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

    const onStarClick = (nextValue, prevValue, name) => {

        setRating(nextValue);

    }
    const handleOnSubmit = e => {

        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        setFormState({
            ...formState,
            [rating]: rating
        })
        const data = {
            ...formState,
            rating: rating
        }
        axios({
            method: "post",
            url: "https://wilshiregfs.com/api/review",
            //url: "http://localhost:3999/api/review",
            data: { ...data }
        })
            .then(r => {
                handleServerResponse(true, "Thanks, we appreciate your feedback!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });

    };
    const style = { color: "#dadada", fontSize: "64px" };
    return (
        <Layout>
            <div className="logo">
                <a href="https://wilshiregfs.com" target="blank"><img class="logo-img" src={Logo} /></a>
                <span>Hello, Alonzo</span>
            </div>
            <Container>
                {!serverState.status ? <>
                    <div className="upload-page-container">
                        <h1>WGFS: Upload Flyers</h1>
                        <h5>Please enter a link to the meeting and upload a flyer for each section.</h5>
                        <form onSubmit={handleOnSubmit}>
                            <div className="upload-section-container">
                                <div className="upload-section">
                                    <h3>Flyer 1</h3>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName">Meeting Link</label>
                                            <input type="text" name="link1" className="form-control"
                                                value={formState.link1}
                                                placeholder="Enter the link to the meeting"
                                                onChange={onInputChange}
                                                required="required" />
                                        </div>
                                        <label>Meeting Image</label>
                                        <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        <button className="btn btn-secondary" type="button" disabled={serverState.submitting}>
                                            Select
                                        </button>
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
                                                required="required" />
                                        </div>
                                        <label>Meeting Image</label>
                                        <div className="placeholder-image"><FaImage style={style} /><div>Please select a flyer</div></div>
                                        <button className="btn btn-outline" disabled={serverState.submitting}>
                                            Select
                                        </button>
                                        {serverState.status && (
                                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                                {serverState.status.msg}
                                            </p>
                                        )}
                                    </div>
                                    </div>
                            <div>
                                    {/* <button className="btn btn-outline-primary button" type="button" disabled={serverState.submitting}>
                                        Clear
                                    </button> */}
                                    <h5 className="mt-4">If everything looks correct, please save.</h5>
                                    <button className="btn btn-primary btn-lg" type="button" disabled>
                                        Save
                                    </button>
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
