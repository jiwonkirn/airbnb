import React, { Component } from 'react';
import ReviewView from '../components/ReviewView';
import api from '../api';

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      reviewpage: [],
    };
  }

  async handlePost(grade, comment) {
    const roomId = this.props.roomId;
    await api.post(`/api/home/review/${roomId}/`, {
      grade,
      comment,
    });
  }
  async handleGetReview() {
    const room_id = this.props.roomId;
    const { data: reviews } = await api.get(`/api/home/review/${room_id}/`);
    console.log(reviews);
    this.setState({
      reviews,
    });
  }
  handleReviewPage() {
    const reviews = this.state.reviews;
    console.log(reviews);
    const array = [];
    for (let i = 0; i < reviews.length; i += 10) {
      array.push(reviews.slice(i, i + 10));
    }
    console.log(array);
    this.setState({
      reviewpage: array,
    });
  }
  async componentDidMount() {
    await this.handleGetReview();
    this.handleReviewPage();
  }
  render() {
    console.log(this.state.reviewpage);
    return (
      <ReviewView
        onPost={(grade, comment) => this.handlePost(grade, comment)}
        onGetReview={() => this.handleGetReview()}
        reviews={this.state.reviews}
        reviewpage={this.state.reviewpage}
      />
    );
  }
}
