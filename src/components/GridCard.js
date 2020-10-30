import React from 'react'
import '../styles/main.css'

function GridCard(props) {
  return (
    <div>
      <a href={`/movie/${props.movieId}`}>
        <img className="gridImg" src={props.image} alt="grid-images"/>
      </a>
    </div>
  )
}

export default GridCard;
