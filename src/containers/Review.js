import React, { Component } from 'react';
import ReviewView from '../components/ReviewView';
import api from '../api';

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
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
    const roomId = this.props.roomId;
    const { data: reviews } = await api.get('/api/home/review/room/list/', {
      params: {
        room_id: roomId,
      },
    });
    console.log(reviews);
    this.setState({
      reviews,
    });
  }
  componentDidMount() {
    this.handleGetReview();
  }
  render() {
    console.log(this.state.reviews);
    console.log(this.props.roomId);
    return (
      <ReviewView
        onPost={(grade, comment) => this.handlePost(grade, comment)}
        onGetReview={() => this.handleGetReview()}
        reviews={this.state.reviews}
      />
    );
  }
}
