import ReceiptView from '../components/ReceiptView';
import React, { Component } from 'react';

export default class Receipt extends Component {
  render() {
    return <ReceiptView {...this.state} />;
  }
}
