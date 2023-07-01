import React from "react";
import { Container } from "reactstrap";
import ZoomMeetingImage from "../assets/flyers/WGFS Estate Financial Planning Zoom Workshop Flyer.png";
import ZoomMeetingImage2 from "../assets/flyers/WGFS Financial Empowerment Flyer.png";
const rsvpURL = "https://us02web.zoom.us/meeting/register/tZEvcuCgqTIvG9ZhnCd6vl1CwItBcxz9ZQIx";
const rsvpURL2 = "https://us02web.zoom.us/meeting/register/tZIpdO6grjgqGd38XgYtadFWLZWe7VP6yANp";

function UpcomingEvents() {

  return (
    <>
      <Container className="mt-5 mb-5" style={{
        margin: `0 auto`,
      }}>
        <h1 className="blue text-center">Upcoming Events</h1>
        <hr />
        <div className="d-flex flex-column flex-lg-row" style={{ marginBottom: `20px` }}>
          <div style={{flex: `1`, textAlign: `center`}}>
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
        </div>
        <div id="aboutus"></div>
      </Container>
    </>
  );
}

export default UpcomingEvents;
