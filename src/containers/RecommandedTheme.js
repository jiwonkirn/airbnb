import React, { Component } from 'react';
import RecommandedThemeView from '../components/RecommandedThemeView';
import api from '../api';

class RecommandedTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '원하시는 테마를 선택해보세요!',
      lists: ['solo', 'couple', 'team', 'price', 'hurry', 'beds'],
      loading: true,
    };
  }

  async componentDidMount() {
    // this.setState({
    //   loading: false,
    // });
  }

  render() {
    const props = this.state;
    return <RecommandedThemeView {...props} />;
  }
}

export default RecommandedTheme;
