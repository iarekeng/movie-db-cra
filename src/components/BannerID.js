import React from "react";
import '../styles/main.css';
import { Typography } from 'antd';
const { Title } = Typography;


function BannerID(props) {
  return(
    <div className="banner-container">
      <img id="banner-image" src={props.image} alt="image" />
      <div className="banner-text-container">
      <Title className="banner-title" level={2} > {props.title}</Title>
      <p className="banner-text">{props.text}</p>
      </div>
    </div>
  )
}

export default BannerID;
