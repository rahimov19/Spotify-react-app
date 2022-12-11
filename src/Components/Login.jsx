import React from "react";
import { useDispatch } from "react-redux";
import { saveUserAction } from "../redux/actions";

export default function Login() {
  const dispatch = useDispatch();

  const saveUser = () => {
    const inputBar = document.querySelector("#login");
    dispatch(saveUserAction(inputBar.value));
  };
  return (
    <>
      <div className="container">
        <div className="row w-100 justify-content-center">
          <div className="col-12 d-flex justify-content-center w-100 mt-3">
            <img
              className="logo"
              src="/img/spotify_black_logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="divider my-3"></div>
      <div className="row d-flex align-items-center w-100 flex-column">
        <p className="font-weight-bold">To continue, log in to Spotify.</p>
        <a href="index.html" className="link">
          <button type="button" className="btn btn-primary mb-3 facebook-login">
            <i className="fa-brands fa-facebook mr-4"></i>
            Continue with Facebook
          </button>
        </a>
        <a href="index.html" className="link">
          <button type="button" className="btn btn-dark apple-login">
            <i className="fa-brands fa-apple mr-4"></i>
            Continue with Apple
          </button>
        </a>
        <div className="break d-flex">
          <div className="half-divider mt-4"></div>
          <span className="mt-3 mx-3 font-weight-bold">OR</span>
          <div className="half-divider mt-4"></div>
        </div>
      </div>
      <div className="row align-items-center flex-column">
        <input
          type="text"
          className="mt-3 email"
          placeholder="Email address or username"
          id="login"
        />
        <input
          type="password"
          className="mt-2 password"
          placeholder="Password"
        />
        <div className="controls d-flex justify-content-between mt-3 align-items-center">
          <div className="form-group form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember-me"
            />
            <label className="form-check-label" for="remember-me">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            onClick={saveUser}
            className="submit btn btn-primary py-0"
          >
            Log in
          </button>{" "}
        </div>

        <a href="/main" className="forgot-password mt-3">
          Forgotten Password?
        </a>
        <div className="full-divider mt-4"></div>
        <p className="font-weight-bold mt-3">Don't have an account?</p>
        <button
          type="button"
          className="btn btn-primary mb-3 register font-weight-bold"
        >
          Sign up for Spotify
        </button>
        <div className="full-divider mt-4"></div>
        <div className="terms mt-3">
          <p>
            If you click "Log in with Facebook" and are not a Spotify user, you
            will be registerd and you agree to Spotify's
            <span className="terms"> Terms & Conditions </span>
            and
            <span className="terms"> Privacy Policy </span>
          </p>
        </div>
      </div>
    </>
  );
}
