import React, { useEffect, useState } from 'react';
import { IMAGE_URL, API_URL, API_KEY } from './apisource'
import BannerID from './BannerID'
import GridCard from './GridCard'
import { Row } from 'antd';

function MoviePage(props) {

const [Movie, setMovie] = useState();
const movieId = props.match.params.movieId
const [cast, setCast] = useState([])

  useEffect(() => {

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMovie(response)

      fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
          console.log(response);
        setCast(response.cast)

      })
    })

  }, [])

  return (
  <div className="page-container">
  {Movie &&
    <BannerID image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path}`}
  title={Movie.original_title}
  text={Movie.overview}
  vote_average={Movie.vote_average}
  vote_count={Movie.vote_count}
    />}
  <Row className="grid-container">
    {cast && cast.map((casts, index) => (
      <React.Fragment key={index}>
        {casts.profile_path &&
          <GridCard
            actor image={`${IMAGE_URL}w500${casts.profile_path}`}
            character={casts.character}
            name={casts.name}
            />
        }
        </React.Fragment>
      ))}
    </Row>
  </div>
  )
}

export default MoviePage
