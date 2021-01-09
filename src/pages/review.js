
import React, { useState } from "react"
import Layout from "../components/layout"
import ServicesNavbar from "../components/NavbarServices"
import axios from "axios"
import Logo from "../assets/images/wilshirelogo.png"
import { Container } from "reactstrap"
import StarRatingComponent from "react-star-rating-component"

const ReviewPage = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const [rating, setRating] = useState(5);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
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
      //url: "https://wilshiregfs.com/api/review",
      url: "http://localhost:3999/api/review",
      data: { ...data }
    })
      .then(r => {
        handleServerResponse(true, "Thanks, we appreciate your feedback!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Layout>
      <Container>
        { !serverState.status ? <>
        <div className="mt-5"><a href="https://wilshiregfs.com" target="blank"><img src={Logo} /></a></div>
        <div className="col-md-8 mt-5">
          <h3>Please leave a review, we appreciate your feedback.</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName">Name</label>
              <input type="text" name="name" className="form-control" 
                value={formState.name}
                placeholder="Enter your full name"
                onChange={onInputChange}
                required="required" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" required="required">Email address</label>
              <input type="email" name="email" className="form-control"
                value={formState.email}
                placeholder="Enter your email"
                onChange={onInputChange} placeholder="Enter email" />
            </div>
            <div className="form-group d-flex flex-column ">
              <label>Please rate us</label>
              <div>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={onStarClick.bind(this)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Please leave any comments</label>
              <textarea type="text" name="message" className="form-control" 
                value={formState.message}
                onChange={onInputChange}
                rows="3"
                placeholder="Enter comments here" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={serverState.submitting}>
              Submit
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
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

export default ReviewPage
