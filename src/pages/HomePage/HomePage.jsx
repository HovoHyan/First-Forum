import React from "react";
import TunaTalk from "../../components/TunaTalk/TunaTalk";
import JoinSection from "../../components/JoinSection/JoinSection";
import FishingForum from "../../components/FishingForum/FishingForum";
import "./homePage.css";
import GeneralForum from "../../components/GeneralForum/GeneralForum";
import AsideMenu from "../../components/AsideMenu/AsideMenu";

const HomePage = () => {
  return (
    <div className="home-page">
      <JoinSection />
      <div className="home-container">
        <div className="home-forums">
          <TunaTalk />
          <FishingForum />
          <GeneralForum />
        </div>
        <AsideMenu />
      </div>
    </div>
  );
};

export default HomePage;
