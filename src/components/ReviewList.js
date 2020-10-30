import React from "react";
import axios from "axios";

class ReviewList extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    this.getReviews();
  }

  async getReviews() {
    const res = await axios.get("http://localhost:8080/");
    this.setState({
      reviews: res.data
    });
  }

  renderDate(dateString) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(dateString);

    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  renderList() {
    return this.state.reviews.map(review => {
      return (
        <div key={review._id}>
          <h3>{review.title}</h3>
          <h4>{review.name}</h4>
          <p>{this.renderDate(review.date)}</p>
          <div>{review.comment}</div>
          <hr/>
        </div>
      )
    })
  }

  render() {
    return(<div>
      <h1> Reviews List</h1>
      {this.renderList()}
      </div>
    )
  }
}

export default ReviewList;
