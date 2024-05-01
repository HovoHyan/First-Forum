import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useEffect } from "react";
import {
  fetchGetActiveUsers,
  fetchPopActiveUser,
} from "../../store/Slices/ActiveUsersSlice/API";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { activeData } = useSelector(selectActiveUsers);
  useEffect(() => {
    dispatch(fetchGetActiveUsers());
  }, []);

  const activeID = activeData.length > 0 ? activeData[0].id : null;
  const handleOut = () => {
    dispatch(fetchPopActiveUser(activeID));
  };
  return (
    <nav>
      <div className="nav-bar">
        <Link className="nav-main-text" to="/">
          Forum
        </Link>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
          <NavLink className="nav-link" to="/messages">
            Messages
          </NavLink>
        </div>
        {activeData.length === 0 ? (
          <div className="nav-login-reg">
            <Link className="nav-login-text" to="/login">
              Log in
            </Link>
            <p style={{ color: "white" }}>|</p>
            <Link className="register-text" to="register">
              Register
            </Link>
          </div>
        ) : (
          <div className="active-icons">
            <Link to="/profile/profilePosts">
              <img
                src={activeData[0].image}
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </Link>

            <p>|</p>
            <IoIosLogOut className="log-out" onClick={handleOut} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
