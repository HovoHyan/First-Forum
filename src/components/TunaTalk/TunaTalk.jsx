import React from "react";
import "./tunaTalk.css";
import { Link } from "react-router-dom";

const TunaTalk = () => {
  const talkForums = [
    {
      id: 1,
      title: "Texnika",
      text: "Pchacela xaladelniky",
      comment: 69,
      thread: "1.2K",
      info: "Lead Weights",
      date: "Saturday at 9:05 PM",
      path: "texnika",
    },
    {
      id: 2,
      title: "Recipe",
      text: "What cook today",
      comment: 50,
      thread: "776",
      info: "Made a harpoon!",
      date: "Yesterday at 7:06 PM",
      path: "recipe",
    },
    {
      id: 3,
      title: "Tuna Miscellaneous",
      text: "Random stuff you might use in pursuit and processing of Tuna",
      comment: 61,
      thread: "869",
      info: "Friday BFT run?",
      date: "Yesterday at 2:00 PM",
      path: "dddd",
    },
  ];
  return (
    <div>
      <div className="forums">
        <div className="main-text">
          <div className="main-text-box"></div>
          <a href="#" className="forum-main-text">
            Tuna Talk
          </a>
        </div>
        {talkForums.map((forum) => {
          return (
            <Link
              to={`forums/${forum.path}`}
              key={forum.id}
              className="tuna-talk-box"
            >
              <div className="forum">
                <div className="forum-message">
                  <img
                    src="https://forums.coastsidefishingclub.com/styles/coastside/coastside/icons/node-icon-general.svg"
                    alt=""
                    className="message-icon"
                  />
                  <div className="forum-info">
                    <div className="title">
                      <a href="#" className="forum-title">
                        {forum.title}
                      </a>
                      <a href="#" className="new-btn">
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TunaTalk;
