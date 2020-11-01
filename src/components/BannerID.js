import React from "react";
import '../styles/main.css';
import { Typography } from 'antd';
const { Title } = Typography;


function BannerID(props) {



  return(
    <div className="bannerID-container">
      <img id="bannerID-image" src={props.image} alt="banner" />
      <div className="bannerID-text-container">
      <Title className="bannerID-title" level={2} > {props.title} <ion-icon id="star" name="star"></ion-icon> {props.vote_average} <small>({props.vote_count} votes)</small></Title>
      <hr className="lineBreak"/>
      <h4>Overview</h4>
      <p className="bannerID-text">{props.text}</p>
      <h2 className="cast">Cast & Character</h2>
      </div>
    </div>
  )
}

export default BannerID;
