import React, { useState } from "react"
import "./upcoming-events.css"
import { Container } from "reactstrap";
import axios from "axios"

function UpcomingEvents() {

    const [imagesState, setImagesState] = useState([]);

    React.useEffect(() => {

        axios({
            method: "get",

            // prod mode
            url: "https://wilshiregfs.com/api/photo",
            // url: "https://alonzoalden.com/api/photo",

            // dev mode
            // url: "http://localhost:3999/api/photo",

        }).then(({ data }) => {

            if (data && data.length) {

                setImagesState({ data });

            }
        }).catch(response => {

            console.log(response);

        });

    }, []);

    return (
        <>
            {imagesState.data && imagesState.data?.length &&
                <Container className="mt-5 mb-1" style={{
                    margin: `0px auto`,
                }}>
                    <h1 className="blue text-center">Upcoming Events</h1>
                    <hr />
                    <div className="flyer-section-container">
                        {(() => {
                            return imagesState.data?.map((data, i) => (

                                <div className="flyer-section">

                                    <a href={data.link} target="_blank"><img src={data.flyerUrl} style={{
                                        width: `100%`,
                                        maxWidth: `700px`,
                                        boxShadow: `4px 4px 8px #ddd`,
                                    }} /></a>

                                </div>
                            ))
                        })()}
                    </div>

                    {/* <div className="d-flex flex-column flex-lg-row" style={{ marginBottom: `20px` }}>
                        <div style={{ flex: `1`, textAlign: `center` }}>
                            <a href={rsvpURL} target="_blank"><img src={ZoomMeetingImage} style={{
                                width: `100%`,
                                maxWidth: `700px`,
                                height: `100%`,
                                boxShadow: `4px 4px 8px #ddd`,
                            }} /></a>
                        </div>
                        <div style={{ width: `96px`, height: `74px` }}></div>
                        <div style={{ flex: `1` }}>
                            <a href={rsvpURL2} target="_blank"><img src={ZoomMeetingImage2} style={{
                                width: `100%`,
                                height: `100%`,
                                boxShadow: `4px 4px 8px #ddd`,
                            }} /></a>
                        </div>
                    </div> */}
                    <div id="aboutus"></div>
                </Container>
            }
        </>
    );
}

export default UpcomingEvents;
