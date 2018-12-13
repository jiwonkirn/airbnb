import React, { Component } from 'react';
import SubSearchFormView from '../components/SubSearchFormView';
import { withSearch } from '../contexts/SearchContext';

class SubSearchForm extends Component {
  render() {
    return <SubSearchFormView />;
  }
}

export default SubSearchForm;
