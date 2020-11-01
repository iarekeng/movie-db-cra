import React from 'react'
import { Col } from 'antd'
import '../styles/main.css'

function GridCard(props) {

  if(props.actor) {
    return (
      <div>
        <div className="actor-container" style={{ position: 'relative' }}>
          <p className="actor-name">{props.name}</p>
          <img className="gridImg" alt="actor-img" src={props.image} />
          <p className="actor-char">{props.character}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <a href={`/movie/${props.movieId}`}>
          <img className="gridImg" src={props.image} alt="grid-images"/>
        </a>
      </div>
    )
  }
}
export default GridCard;
