import React from "react";
import '../styles/main.css';
import { Typography } from 'antd';
const { Title } = Typography;


function BannerID(props) {
  return(
    <div className="bannerID-container">
      <img id="bannerID-image" src={props.image} alt="banner" />
      <div className="bannerID-text-container">
      <Title className="bannerID-title" level={2} > {props.title}</Title>
      <p className="bannerID-text">{props.text}</p>
      </div>
    </div>
  )
}

export default BannerID;
