import React from "react";
import "./AppDownload.css";
import google_play from "../../assets/get-it-on-google-play-png-1.png";
import app_store from "../../assets/get-on-app-store.png";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Bia App
      </p>
      <div className="app-download-platforms">
        <img src={google_play} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
