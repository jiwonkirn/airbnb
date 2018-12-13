import React, { Component } from 'react';
import style from './ReviewView.module.scss';
export default class ReviewView extends Component {
  render() {
    return (
      <form action="">
        <div className={style.grade}>
          <label htmlFor="">별점</label>
          <select className={style.gradeSelect} name="" id="">
            <option value="">1개</option>
            <option value="">2개</option>
            <option value="">3개</option>
            <option value="">4개</option>
            <option value="">5개</option>
          </select>
        </div>
        <div>
          <label htmlFor="">후기 작성란</label>
          <textarea name="" id="" cols="30" rows="10" />
        </div>
      </form>
    );
  }
}
