import React from 'react'

function SearchBar(props) {
  return (
    <>
    <form onSubmit={props.handleOnSubmit}>
      <input
      className="form-control form-control-lg searchbar" type="search"
      placeholder="Search"
      onChange={props.handleOnChange}
      aria-label="Search"
     />
    </form>
    </>
  )
}

export default SearchBar;
