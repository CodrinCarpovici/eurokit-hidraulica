import React from "react";
import "./Login.scss";

import person from "bootstrap-icons/icons/person-circle.svg";
import facebook from "bootstrap-icons/icons/facebook.svg";
import twitter from "bootstrap-icons/icons/twitter.svg";

const Login = () => {
  return (
    <div className="dropdown d-inline-block top-right-link ">
      <a
        type="button"
        className="btn login dropdown-toggle"
        href="#login"
        role="button"
        id="login"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        <img src={person} className="person-log"></img>
      </a>
      <ul
        id="login-dp"
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuClickableInside"
      >
        <li>
          <div className="row">
            <div className="col-md-12">
              Login via
              <div className="social-buttons">
                <a href="#" className="btn btn-fb">
                  <img src={facebook} className="fa fa-facebook"></img> Facebook
                </a>
                <a href="#" className="btn btn-tw">
                  <img src={twitter} className="fa fa-twitter"></img> Twitter
                </a>
              </div>
              or
              <form
                className="form"
                role="form"
                method="post"
                action="login"
                accept-charset="UTF-8"
                id="login-nav"
              >
                <div className="form-group">
                  <label className="sr-only" for="exampleInputEmail2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail2"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="sr-only" for="exampleInputPassword2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Password"
                    required
                  />
                  <div className="help-block text-end">
                    <a href="">Forgot the password ?</a>
                  </div>
                </div>
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block sign-in"
                  >
                    Sign in
                  </button>
                </div>
                <div className="checkbox">
                  <label className="checkbox-log">
                    <input type="checkbox" /> Keep me logged-in
                  </label>
                </div>
              </form>
            </div>
            <div className="bottom text-center">
              New here ?{" "}
              <a href="#">
                <b>Join Us</b>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Login;
