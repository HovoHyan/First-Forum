import React from "react";
import "./asideMenu.css";

const AsideMenu = () => {
  const mediaStatistics = [
    {
      id: 1,
      title: "Categories",
      count: 1,
    },
    {
      id: 2,
      title: "Albums",
      count: 746,
    },
    {
      id: 3,
      title: "Uploaded media",
      count: 5219,
    },
    {
      id: 4,
      title: "Embedded media",
      count: 1,
    },
    {
      id: 5,
      title: "Comments",
      count: 664,
    },
    {
      id: 6,
      title: "Disk usage",
      count: 1001.9,
    },
  ];
  return (
    <div className="aside-menu">
      <div className="subscribe-box">
        <h1 className="sub-title">Subscribe (or renew) to View All Forums</h1>
        <p className="sub-text">Get access to all public and private forums.</p>
        <a href="#" className="support-btn">
          <span>Subscribe now</span>
        </a>
      </div>
      <div className="support-box">
        <p className="support-title">
          Support the Coastside Fishing Foundation
        </p>
        <p className="support-text">Please consider donating to help us.</p>
        <a href="#" className="support-btn">
          <span>Support the foundation</span>
        </a>
      </div>
      <div className="media">
        <p className="media-title">Media Statistics</p>
        {mediaStatistics.map((media) => (
          <div key={media.id} className="media-statistic">
            <p className="media-info">{media.title}:</p>
            <p>{media.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideMenu;
