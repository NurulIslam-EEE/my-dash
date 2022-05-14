import React from "react";
import bg from "../../assets/images/login-bg.png";
import "../../Styles/SignUp.scss";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/barChart");
  };
  return (
    <div className="sign-up">
      <div className="sign-up__image">
        <img src={bg} alt="" />
      </div>
      <div className="sign-up__form">
        <div className="sign-up__form__input__container">
          <h3 className="sign-up__form__title"> Create an account</h3>
          <form onSubmit={handleOnclick}>
            <label className="sign-up__form__input--label" htmlFor="email">
              Your email address
            </label>
            <br />
            <input
              className="sign-up__form__input"
              type="email"
              id="email"
              name="email"
              required
            />
            <br />
            <label className="sign-up__form__input--label" htmlFor="password">
              Your password
            </label>
            <br />
            <input
              className="sign-up__form__input"
              type="password"
              id="password"
              name="password"
              required
            />
            <br />
            <label className="sign-up__form__input--label" htmlFor="password2">
              Confirm your password
            </label>
            <br />
            <input
              className="sign-up__form__input"
              type="password"
              id="password2"
              name="password2"
              required
            />
            <br />
            <label className="sign-up__form__input--label" htmlFor="name">
              Your full name
            </label>
            <br />
            <input
              className="sign-up__form__input"
              type="text"
              id="name"
              name="name"
            />
            <br />
            <label className="sign-up__form__input--label" htmlFor="phone">
              Phone Number
            </label>
            <br />
            <input
              className="sign-up__form__input"
              type="text"
              id="phone"
              name="phone"
            />
            <br />
            <input className="sign-up__form__checkbox__input" type="checkbox" id="condition" name="condition" />
            <label className="sign-up__form__checkbox" htmlFor="condition">
              I read and agree term and condition
            </label>
            <br />
            <input
              className="sign-up__button"
              type="submit"
              value="Create account"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
