import React from "react";
import "./messagesPage.css";
import { useSelector } from "react-redux";
import { selectMessagesData } from "../../store/Slices/MessagesSlice/messagesSlice";

const MessagesPage = () => {
  const { messagesData } = useSelector(selectMessagesData);
  console.log(messagesData);
  return (
    <div className="message-page-container">
      <div className="messages-page">
        <h1>All Messages From Users</h1>
        <div className="message-cards">
          {messagesData.map((message) => {
            return (
              <div className="message-card" key={message?.id}>
                <div className="message-info">
                  <img src={message?.image} alt="" width={40} height={40} />
                  <p className="user-name">{message?.name}</p>
                </div>
                <div className="message-about">
                  <h3>{message?.subject}</h3>
                  <p className="message-text">{message.message}</p>
                </div>
                <div className="message-btns">
                  <button className="answer-btn">Answer</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
