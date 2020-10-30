import React, { useEffect, useState } from 'react';
import { IMAGE_URL, API_URL, API_KEY } from './apisource'
import Movie from './main'
import BannerID from './BannerID'

function MoviePage(props) {

const [Movie, setMovie] = useState([])

  useEffect(() => {
    const movieId = props.match.params.movieId

    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMovie(response)
    })

  }, [])

  return (
  <div>
  {Movie &&
    <BannerID image={`${IMAGE_URL}w1280${Movie.backdrop_path && Movie.backdrop_path}`}
    title={Movie.original_title}
    text={Movie.overview} />}

  </div>
  )
}

export default MoviePage
