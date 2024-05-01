import { useDispatch, useSelector } from "react-redux";
import "./loginPage.css";
import { selectUser } from "../../store/Slices/UsersSlice/usersSlice";
import { fetchAddActiveUser } from "../../store/Slices/ActiveUsersSlice/API";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectUser);
  const navigate = useNavigate();

  const handleCheck = (e) => {
    e.preventDefault();
    const {
      login: { value: login },
      password: { value: password },
    } = e.target;
    console.log(login, password);
    const loginUser = data.find(
      (el) => el.userName === login && el.password === password
    );

    if (loginUser) {
      dispatch(fetchAddActiveUser(loginUser));
      navigate("/profile");
      console.log(loginUser);
    }
    e.target.reset();
  };

  return (
    <div className="login">
      <div className="LoginPage">
        <h2 className="login-text"> Log in </h2>
        <form className="form-inputs" onSubmit={handleCheck}>
          <div className="inputs-div">
            <input
              className="login-input"
              type="text"
              placeholder="UserName"
              name="login"
              required
            />
            <input
              className="login-input"
              placeholder="Password"
              name="password"
              required
              type="password"
            />
          </div>
          <div class="links">
            <a href="#">Forgot Password?</a> <a href="/register">Register</a>
          </div>
          <div>
            <button className="login-button">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
