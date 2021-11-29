import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordOutlinedIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "India Prepare for Omricon varient",
        "Top news . 5,999 readers"
      )}
      {newsArticle("How to be more productive", "2d ago . 9,999 readers")}
      {newsArticle("Software Engineering is crazy!!", "3d ago . 2,599 readers")}
      {newsArticle(
        "Bid adiue to distraction at work",
        "3d ago . 4,111 readers"
      )}
      {newsArticle("Acing career switch", "2d ago . 5,345 readers")}
      {newsArticle("What's Next for crypto in india", "9d ago . 5,190 readers")}
    </div>
  );
}

export default Widgets;
