import React, { useEffect, useState } from 'react';
import { IMAGE_URL, API_URL, API_KEY } from './apisource'

import BannerID from './BannerID'

function MoviePage(props) {

const [Movie, setMovie] = useState();
const movieId = props.match.params.movieId

  useEffect(() => {

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMovie(response)
    })

  }, [])

  return (
  <div className="page-container">
  {Movie &&
    <BannerID image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path}`}
    title={Movie.original_title}
    text={Movie.overview} />}
  </div>
  )
}

export default MoviePage
