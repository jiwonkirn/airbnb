import React, { Component } from 'react';
import style from './MyReviewView.module.scss';
import { ReactComponent as Star } from '../svg/star.svg';
import { Link } from 'react-router-dom';

export default class MyReviewView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      stars: [1, 2, 3, 4, 5],
    };
  }

  render() {
    const { stars } = this.state;
    const { room } = this.props;
    return (
      <div className={style.myReviewContianer}>
        <div className={style.title}>내가 작성한 후기</div>
        <div className={style.list}>
          <div className={style.userImg} />
          <div className={style.commentbox}>
            {room.map(item => (
              <div className={style.item}>
                <Link to={'/review/' + item[0]}>
                  <div className={style.date}>{item.created_at}</div>
                  <div className={style.comment}>{item.comment}</div>
                  <div className={style.starBox}>
                    {stars.map((star, index) =>
                      star <= item.grade ? (
                        <Star key={index} className={style.star1} />
                      ) : (
                        <Star key={index} className={style.star2} />
                      )
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
