import React, { useState } from "react";
import "../App.css";

export default function Form() {
  const [state, setState] = useState({
    file: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    linkedin: "",
    twitter: "",
    gitHub: "",
    portfolio: "",
    website: "",
    addtext: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="mainContent">
      <div className="content-section">
        <div className="container">
          <div className="postHeader">
            <h2>Full-Stack Engineer</h2>
            <div className="categories">
              <div className="catLabel">Remote optional /</div>
              <div className="catLabel">Product – Engineering /</div>
              <div className="catLabel">Full-time</div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSection">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="formTitle">
              <h4>Submit your application</h4>
            </div>
            <div className="form-control">
              <label>Resume/CV </label>
              <input
                type="file"
                name="file"
                value={state.file}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control">
              <label>Full name</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={state.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-control">
              <label>Current company </label>
              <input
                type="text"
                name="company"
                value={state.company}
                onChange={handleInputChange}
              />
            </div>

            <h4>Links</h4>

            <div className="form-control">
              <label>LinkedIn URL </label>
              <input
                type="text"
                name="linkedin"
                value={state.linkedin}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Twitter URL </label>
              <input
                type="text"
                name="twitter"
                value={state.twitter}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>GitHub URL </label>
              <input
                type="text"
                name="gitHub"
                value={state.gitHub}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Portfolio URL </label>
              <input
                type="text"
                name="portfolio"
                value={state.portfolio}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Other website </label>
              <input
                type="text"
                name="website"
                value={state.website}
                onChange={handleInputChange}
              />
            </div>
            <h4 data-qa="cardName">Preferred pronouns</h4>
            <input type="hidden" value="" name="" />
            <ul>
              <li className="customQuestion">
                <label>
                  <div className="">
                    <div className="text">
                      If you'd like, please share your pronouns with us.
                    </div>
                  </div>
                  <div className="">
                    <input
                      className=""
                      type="text"
                      placeholder="Type your response"
                      value=""
                      name=""
                    />
                  </div>
                </label>
              </li>
            </ul>
            <label>
              <h4>Additional information</h4>
            </label>
            <div className="application-additional">
              <textarea
                placeholder="Add a cover letter or anything else you want to share."
                value={state.addtext}
                onChange={handleInputChange}
                name="addtext"
              ></textarea>
            </div>
            <div className="form-control">
              {/* <button type="submit">Login</button> */}
              <div className=""><button className= "postingBtn templateBtn hexColor" type="submit">Submit application</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
