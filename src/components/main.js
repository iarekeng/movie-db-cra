import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL } from './apisource'
import BannerImage from './BannerImage'
import { Typography, Row } from 'antd'
import GridCard from './GridCard'
const { Title } = Typography;

function Main() {

  const [Movies, setMovies] = useState([])
  const [CurrentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    loadMore(endpoint)
  }, [])

  const loadMore = (movies) => {
    fetch(movies)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMovies(response.results)
      setCurrentPage(response.page)
    })
  }
  const handlePrev = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage <= 1 ? !CurrentPage : CurrentPage - 1}`
    loadMore(endpoint);
  }

  const handleNext = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`
    loadMore(endpoint);
  }

  return (
    <div id="banner-scroll">
      {Movies[13] &&
        <BannerImage  image={`${IMAGE_URL}w1280${Movies[13].backdrop_path && Movies[13].backdrop_path}`}
        title={Movies[13].original_title} text={Movies[13].overview}
        image2={`${IMAGE_URL}w1280${Movies[7].backdrop_path && Movies[7].backdrop_path}`}
        title2={Movies[7].original_title} text2={Movies[7].overview}
        image3={`${IMAGE_URL}w1280${Movies[17].backdrop_path && Movies[17].backdrop_path}`}
        title3={Movies[17].original_title} text3={Movies[17].overview} />}
    <div className="title-style">
      <Title id="popularM" className="popularMovies" level={2} >Popular Movies</Title>
      <hr className="lineBreak"/>
      <Row className="grid-container">
        {Movies && Movies.map((movie, index) => (
          <React.Fragment key={index}>
            <GridCard
              image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
              movieId={movie.id}
              movieName={movie.original_title}
            />
          </React.Fragment>
        ))}
      </Row>
      <div className="loadMore">
        <a href='#banner-scroll'><button className="btn btn-outline-light loadbutton" onClick={handlePrev}>Previous</button></a>
        <a href='#banner-scroll'><button className="btn btn-outline-light loadbutton" onClick={handleNext}>Next</button></a>
      </div>
    </div>
  </div>
  )
}

export default Main
