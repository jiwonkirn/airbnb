import React, { Component } from 'react';
import style from './ReceiptView.module.scss';

export default class ReceiptView extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.reserveTitle}>
          <h2 className={style.partTile}>확정된 예약: </h2>
        </div>
      </div>
    );
  }
}
