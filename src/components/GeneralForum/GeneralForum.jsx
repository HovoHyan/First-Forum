import React from "react";

const GeneralForum = () => {
  const generalForums = [
    {
      id: 1,
      title: "General Fishing Discussions",
      text: "The chat shack specific to all things fishing-Stuff that does not fall into another sub-forum",
      comment: "19.2K",
      thread: "179.2K",
      info: "Salmon Season prospects",
      date: "Yesterday at 11:03 PM",
    },
    {
      id: 2,
      title: "Tackle Talk",
      text: "Talk about Tackle, Shops, Vendors and Products. Interact with our sponsors",
      comment: "2.4K",
      thread: "27.4K",
      info: "Plugs are great",
      date: "Today at 7:01 AM",
    },
    {
      id: 3,
      title: "Crew Needed and Crew Available",
      text: "Where are you headed and/or are you a member looking for a ride",
      comment: "1.3K",
      thread: "5.4K",
      info: "Friday April 26th",
      date: "Friday at 1:47 PM",
    },
    {
      id: 4,
      title: "Scouting and Buddy Boats",
      text: "Coordinate scouting trips and buddy boats.",
      comment: "94",
      thread: "1K",
      info: "April 2 - bluefin?",
      date: "Apr 2, 2024",
    },
    {
      id: 5,
      title: "Coastside Projects & Events",
      text: "Club Projects (Salmon Pens), CS Sanctioned Events (Dinners, Derbies etc)",
      comment: "305",
      thread: "4.9K",
      info: "4th. ANNUAL MIKE STARR",
      date: "Saturday at 6:55 PM",
    },
  ];
  return (
    <div>
      <div className="forums">
        <div className="main-text">
          <div
            className="main-text-box"
            style={{ backgroundColor: "#dca243" }}
          ></div>
          <a href="#" className="forum-main-text">
            General Forums
          </a>
        </div>

        {generalForums.map((forum) => {
          return (
            <div className="forum" key={forum.id}>
              <div className="forum-message">
                <img
                  src="https://forums.coastsidefishingclub.com/styles/coastside/coastside/icons/node-icon-general.svg"
                  alt=""
                  className="message-icon"
                  style={{ backgroundColor: "#dca243" }}
                />
                <div className="forum-info">
                  <div className="title">
                    <a href="#" className="forum-title">
                      {forum.title}
                    </a>
                    <a
                      href="#"
                      className="new-btn"
                      style={{ backgroundColor: "#dca243" }}
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

export default GeneralForum;
