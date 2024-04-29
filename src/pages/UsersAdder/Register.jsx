import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/Slices/UsersSlice/usersSlice";
import "./register.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { fetchAddNewUser } from "../../store/Slices/UsersSlice/API";
import { selectCountries } from "../../store/Slices/UsersSlice/country";

const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { countryList } = useSelector(selectCountries);
  console.log(countryList);
  const handleShow = () => {
    setShow(!show);
  };
  const handleConfirmShow = () => {
    setConfirm(!confirm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userName: { value: userName },
      email: { value: email },
      age: { value: age },
      password: { value: password },
      checkPassword: { value: checkPassword },
      country: { value: country },
    } = e.target;
    if (password === checkPassword) {
      if (users.data.find((el) => el.userName === userName)) {
        e.target.userName.value = "";
        alert("Your Login is already used. Please change it.");
        return;
      }
      const newUser = {
        id: new Date().getTime().toString(),
        active: false,
        userName,
        email,
        age,
        password,
        country,
        posts: [],
        image: "https://www.computerhope.com/jargon/g/guest-user.png",
      };
      dispatch(fetchAddNewUser(newUser));
      e.target.reset();
    } else {
      e.target.checkPassword.value = "";
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="register">
      <h2>Register</h2>
      <input type="text" placeholder="UserName" name="userName" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="number" placeholder="Age" name="age" required />
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        name="password"
        required
      />
      {show ? (
        <FaEye className="show_icon" onClick={handleShow} />
      ) : (
        <FaEyeSlash className="show_icon" onClick={handleShow} />
      )}
      <input
        type={confirm ? "text" : "password"}
        placeholder="Confirm Password"
        name="checkPassword"
        required
      />
      {confirm ? (
        <FaEye className="confirm_icon" onClick={handleConfirmShow} />
      ) : (
        <FaEyeSlash className="confirm_icon" onClick={handleConfirmShow} />
      )}

      <div className="select-box">
        <select name="country" className="country-select">
          {countryList.map((elem, index) => (
            <option key={index}>{elem.name}</option>
          ))}
        </select>
      </div>
      <button>Register</button>
      <p className="to-login">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </form>
  );
};

export default Register;
