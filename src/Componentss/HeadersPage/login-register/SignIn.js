import React, { useState } from "react";
import signinpage from "../../images/signinpage.png";
import logo from "../../images/logo.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaCar} from "react-icons/fa"

const SignIn = () => {
  const [contactNo, setcontactNo] = useState("");
  const [password, setPassword] = useState("");

  function saveDataget() {
    let data = { contactNo, password };
    fetch("https://evs1owner.herokuapp.com/owner/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(data),
    }).then(resp => resp.json())
      .then(result => console.log(result.token));
  };
  return (
    <>
      <div className="container-fluid main-back">
        <div className="container main-bg">
          <div className="side-image"></div>
          <div className="form-background"></div>
          <img
            src={logo}
            alt="logo"
            width="150px"
            height="39.87px"
            className="ima1"
          />
          <div className="row">
            <div className="col-xs-6 col-sm-8 col-lg-6 login-left ">
              <img src={signinpage} alt="page" className="img-fluid ima" />
            </div>
            <div className="col-xs-6 col-sm-4 col-lg-6 login-right">
              <div>
                <h2 className="p-3">Welcome!</h2>
                <form className="form-input">
                  <div className="p-3">
                    {/* <label htmlFor="Mobile no.">Mobile no.</label> */}
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Enter Your Number"
                      value={contactNo}
                      onChange={(e) => {
                        setcontactNo(e.target.value);
                      }}
                    />
                    <FaMobileAlt />
                  </div>
                  <div className="p-3">
                    {/* <label>Password</label> */}
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <FaRegEyeSlash />
                  </div>
                </form>
                <Link to="/resetpass">Forget Password?</Link>
                <button
                  type="button"
                  className="btn1 d-grid gap-2 col-8 mx-auto m-3"
                  onClick={saveDataget}
                >
                  Log In
                </button>
              </div>
              <Link to="/signup">Don't have Account?</Link>
            </div>
          </div>
          <div className="container core mt-5">
          <h3>Core Values</h3>
          <div className="d-inline-flex">
            <div class="col-6">
              <p><FaCar/>  Electric vehicles support environmental justice</p>
              <p><FaCar/>  Clean air commitment</p>
            </div>
            <div class="col-6">
              <p><FaCar/>  EVs help your community achieve climate change goals</p>
              <p><FaCar/>  EV charging increases property value</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;



