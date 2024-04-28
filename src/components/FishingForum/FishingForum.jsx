import React from "react";
import "./fishingForum.css";

const FishingForum = () => {
  const fishingForums = [
    {
      id: 1,
      title: "Fishing Politics",
      text: "Fishing Politics",
      comment: "1.6K",
      thread: "13.5K",
      info: "Ad Hoc Marine Planning",
      date: "Thursday at 8:12 AM",
    },
    {
      id: 2,
      title: "Fishing Rules and Regulations",
      text: "Fishing Rules and Regulations",
      comment: "704",
      thread: "8.7K",
      info: "2024 Groundfish Regulations",
      date: "Yesterday at 7:39 PM",
    },
  ];
  return (
    <div>
      <div className="forums">
        <div className="main-text">
          <div
            className="main-text-box"
            style={{ backgroundColor: "#7db5b2" }}
          ></div>
          <a href="#" className="forum-main-text">
            Fishing Politics, Rules and Regulations
          </a>
        </div>

        {fishingForums.map((forum) => {
          return (
            <div className="forum" key={forum.id}>
              <div className="forum-message">
                <img
                  src="	https://forums.coastsidefishingclub.com/styles/coastside/coastside/icons/node-icon-fishing-rules.svg"
                  alt=""
                  className="note-icon"
                />
                <div className="forum-info">
                  <div className="title">
                    <a href="#" className="forum-title">
                      {forum.title}
                    </a>
                    <a
                      href="#"
                      className="new-btn"
                      style={{ backgroundColor: "#7db5b2" }}
                    >
                      NEW
                    </a>
                  </div>
                  <p className="forum-text">{forum.text}</p>
                  <div className="comments">
                    <p>{forum.comment}</p>
                    <p>{forum.thread}</p>
                  </div>
                </div>
              </div>
              <div className="forum-box">
                <p>{forum.info}</p>
                <p>{forum.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishingForum;
