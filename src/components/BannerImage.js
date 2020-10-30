import React from 'react'
import '../styles/main.css'
import { Typography } from 'antd'
const { Title } = Typography;


function BannerImage(props) {
  return(
    <div id="carouselExampleIndicators" className="banner-  container carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img id="banner-image" src={props.image} alt="banner1" />
        <div className="banner-text-container">
          <Title className="banner-title" level={2} > {props.title}</Title>
          <p className="banner-text">{props.text}</p>
        </div>
        </div>
        <div className="carousel-item">
          <img id="banner-image" src={props.image2} alt="banner2" />
          <div className="banner-text-container">
          <Title className="banner-title" level={2} > {props.title2}</Title>
          <p className="banner-text">{props.text2}</p>
          </div>
        </div>
          <div className="carousel-item">
            <img id="banner-image" src={props.image3} alt="banner3" />
            <div className="banner-text-container">
            <Title className="banner-title" level={2} > {props.title3}</Title>
            <p className="banner-text">{props.text3}</p>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
  )
}

export default BannerImage;
