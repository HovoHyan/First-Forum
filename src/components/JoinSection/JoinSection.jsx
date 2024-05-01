import React from "react";
import "./joinSection.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectActiveUsers } from "../../store/Slices/ActiveUsersSlice/activeUsersSlice";

const JoinSection = () => {
  const { activeData } = useSelector(selectActiveUsers);
  return (
    <div>
      {activeData.length === 0 ? (
        <div className="joinSection">
          <div className="join-info">
            <h1 className="join-title">JOIN OUR COMMUNITY</h1>
            <p className="join-text">
              Join other recreational fishermen to share <br /> experiences and
              advice.
            </p>
            <Link to="/register">
              <button className="join-reg-btn">
                <svg
                  width="150px"
                  height="60px"
                  viewBox="0 0 180 60"
                  className="border button-svg"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="hl-line"
                  />
                </svg>
                <span>Register</span>
              </button>
            </Link>
          </div>

          <img
            src="https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-mazok-kisti-png-8.png"
            alt=""
            width={800}
            className="join-back-img"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default JoinSection;
