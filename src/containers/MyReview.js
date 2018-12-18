import MyReviewView from '../components/MyReviewView';
import React, { Component } from 'react';
import api from '../api';

export default class MyReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: [],
    };
  }

  async componentDidMount() {
    const { data: review } = await api.get(`api/home/review/user/list/`);
    this.setState({
      room: review,
    });
    this.setState({
      loading: true,
    });
  }

  render() {
    return <MyReviewView {...this.state} />;
  }
}
