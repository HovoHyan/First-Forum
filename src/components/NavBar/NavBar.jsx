import { useSelector, useDispatch } from "react-redux";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  deleteActiveUser,
  getActiveUsers,
} from "../../store/Slices/ActiveUsersSlice/API";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  const dispatch = useDispatch();
  const { activeData } = useSelector(selectActiveUsers);
  useEffect(() => {
    dispatch(getActiveUsers());
  }, []);

  const [search, setSearch] = useState(false);
  const searchToggle = () => {
    setSearch(!search);
  };
  const activeID = activeData.length > 0 ? activeData[0].id : null;
  const handleOut = () => {
    dispatch(deleteActiveUser(activeID));
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
            {search ? (
              <input type="text" />
            ) : (
              <IoMdSearch className="search-icon" onClick={searchToggle} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
