import React, { useState } from "react";
import bg from "../../assets/images/login-bg.png";
import "../../Styles/SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordWarn, setPasswordWarn] = useState("");
  const [passwordWarn2, setPasswordWarn2] = useState("");
  let navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // validating password
    const regularExpression =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!regularExpression.test(password)) {
      setPasswordWarn(
        "Password must have a minimum eight characters, at least one letter, one number and one special character"
      );
   
    } else if (password !== password2) {
      setPasswordWarn("Password doesn't match");
   
    } else {
      // push to new route
      navigate("/barChart");
    }
  };
  console.log(password, password2, passwordWarn);
  return (
    <div className="sign-up">
      <div className="sign-up__image">
        <img src={bg} alt="" />
        <div className="sign-up__title">
          <h3>Choose a date range</h3>
         
        <p className="sign-up__title__des">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
        </div>
      
      </div>
      <div className="input-group">
        <div className="input-group__input__container">
          <h3 className="input-group__title"> Create an account</h3>
          <form onSubmit={handleOnSubmit}>
            <label className="input-group__label" htmlFor="email">
              Your email address
            </label>
            <br />
            <input
              className="input-group__input"
              type="email"
              id="email"
              name="email"
              required
            />
            <br />
            <label className="input-group__label" htmlFor="password">
              Your password
            </label>
            <br />
            <input
              className="input-group__input"
              type="password"
              id="password"
              name="password"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            {/* {passwordWarn&& <p className="input-group__warn">{passwordWarn}</p>} */}
            <label className="input-group__label" htmlFor="password2">
              Confirm your password
            </label>
            <br />
            <input
              className="input-group__input"
              type="password"
              id="password2"
              name="password2"
              onBlur={(e) => setPassword2(e.target.value)}
              required
            />
            <br />
            <label className="input-group__label" htmlFor="name">
              Your full name
            </label>
            <br />
            <input
              className="input-group__input"
              type="text"
              id="name"
              name="name"
            />
            <br />
            <label className="input-group__label" htmlFor="phone">
              Phone Number
            </label>
            <br />
            <input
              className="input-group__input"
              type="text"
              id="phone"
              name="phone"
            />
            <br />
            <input
              className="input-group__checkbox__input"
              type="checkbox"
              id="condition"
              name="condition"
            />
            <label className="input-group__checkbox" htmlFor="condition">
              I read and agree term and condition
            </label>
            <br />
            {passwordWarn && (
              <p className="input-group__warn">{passwordWarn}</p>
            )}
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
