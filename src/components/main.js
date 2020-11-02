import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_URL, Search_API } from './apisource'
import BannerImage from './BannerImage'
import SearchBar from './SearchBar'
import { Row } from 'antd'
import GridCard from './GridCard'



function Main() {

  const [Movies, setMovies] = useState([])
  const [CurrentPage, setCurrentPage] = useState(0)
  const [searchTerm, setSearchTerm] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
    loadMore(endpoint)
  }, [])

  const loadMore = (movies) => {
    fetch(movies)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setMovies(response.results)
      setCurrentPage(response.page)
      setList(response.results)
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(Search_API + searchTerm)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setList(response.results)
    });
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }



  return (
    <div id="banner-scroll">
      {Movies[13] &&
        <BannerImage  image={`${IMAGE_URL}w1280${Movies[13].backdrop_path && Movies[13].backdrop_path}`}
        title={Movies[13].original_title} text={Movies[13].overview}
        release_date={Movies[13].release_date}
        vote_average={Movies[13].vote_average}
        vote_count={Movies[13].vote_count}
        image2={`${IMAGE_URL}w1280${Movies[11].backdrop_path && Movies[11].backdrop_path}`}
        title2={Movies[11].original_title} text2={Movies[11].overview}
        image3={`${IMAGE_URL}w1280${Movies[10].backdrop_path && Movies[10].backdrop_path}`}
        title3={Movies[10].original_title} text3={Movies[10].overview} />}
    <div className="title-style">
      <SearchBar
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      />
      <hr className="lineBreak"/>
      <Row className="grid-container">
        {list && list.map((movie, index) => (
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
