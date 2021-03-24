import React from "react";
import "./index.scss";
export default function StrangerThingsGif() {
  return (
    <div className="StrangerThingsGif">
      <div className="StrangerThingsGif_title">Watch everywhere</div>
      <div className="StrangerThingsGif_description">
        Stream unlimted movies and TV shows on your phone, tablet, laptop, and
        Tv without paying more.
      </div>
      <div className="StrangerThingsGif-container">
        <div className="StrangerThingsGif_background">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt=""
          ></img>
        </div>
        <div className="StrangerThingsGif_foreground">
          <video controls autoPlay loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
