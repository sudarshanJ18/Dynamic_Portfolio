
import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about?.quote || "No quote available"}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={about?.avatar?.url || "/default-avatar.png"}
            alt={about?.name || "User"}
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about?.name || "Anonymous"}
          </Typography>
          <Typography>{about?.title || "No title available"}</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about?.subtitle || "No subtitle available"}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about?.description || "No description available"}
          </Typography>
        </div>
      </div>
    </div>
  );
};


export default About;
