import React, { Component } from 'react';
import ReviewView from '../components/ReviewView';
import api from '../api';

export default class Review extends Component {
  async handlePost(grade, comment) {
    const roomId = this.props.roomId;
    await api.post(`/api/home/review/${roomId}/`, {
      grade,
      comment,
    });
  }
  render() {
    return (
      <ReviewView
        onPost={(grade, comment) => this.handlePost(grade, comment)}
      />
    );
  }
}
