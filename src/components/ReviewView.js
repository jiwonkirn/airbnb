import React, { Component } from 'react';
import style from './ReviewView.module.scss';
import { ReactComponent as Star } from '../svg/star.svg';
export default class ReviewView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grade: '',
      comment: '',
      stars: [1, 2, 3, 4, 5],
      pagenumber: 0,
    };
  }
  handleComment(e) {
    this.setState({
      comment: e.target.value,
      // comment: e.target.elements.comment.value, 과 뭐가 다른 건지 질문...
    });
  }
  refreshState = () => {
    this.setState({
      grade: '',
      comment: '',
      stars: [1, 2, 3, 4, 5],
    });
  };
  async handleSubmit(e) {
    e.preventDefault();
    const grade = this.state.grade;
    const comment = this.state.comment;
    if (grade && comment) {
      this.props.onPost(grade, comment);
    } else {
      alert('별점이나 후기를 입력하셨는지 다시 확인해 주세요.');
    }
    this.props.onGetReview();
    await this.refreshState();
    //이거 왜 await를 붙여야 하는 걸까...??
  }
  handlePageNumber(pagenumber) {
    this.setState({
      pagenumber: pagenumber,
    });
  }
  handleGrade(index) {
    this.setState({
      grade: index + 1,
    });
  }
  render() {
    const { grade, stars, comment, pagenumber } = this.state;
    const { reviews, reviewpage } = this.props;
    console.log(this.state.grade);
    return (
      <div>
        <h3 className={style.category2}>후기 {reviews.length}개</h3>
        <form onSubmit={e => this.handleSubmit(e)} action="">
          <div className={style.grade}>
            <label className={style.gradeText} htmlFor={style.gradeSelect}>
              별점
            </label>
            <div className={style.starBox}>
              {stars.map((star, index) =>
                index + 1 <= grade ? (
                  <Star
                    key={index}
                    onClick={() => this.handleGrade(index)}
                    className={style.star1}
                  />
                ) : (
                  <Star
                    key={index}
                    onClick={() => this.handleGrade(index)}
                    className={style.star2}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <label htmlFor={style.reviewText}>후기 작성란</label>
            <textarea
              onChange={e => this.handleComment(e)}
              className={style.reviewText}
              name="comment"
              value={comment}
              id=""
              cols="30"
              rows="10"
            />
          </div>
          <button className={style.reviewBtn}>후기 쓰기</button>
        </form>
        <hr className={style.devider} />
        {reviewpage[pagenumber] &&
          reviewpage[pagenumber].map((review, index) => (
            <div key={index}>
              <div className={style.userInfo}>
                <div className={style.userImg} />
                <div className={style.userGrade}>
                  <div className={style.starBox}>
                    {stars.map((star, index) =>
                      star <= review.grade ? (
                        <Star key={index} className={style.star1} />
                      ) : (
                        <Star key={index} className={style.star2} />
                      )
                    )}
                  </div>
                  <p>{review.created_at}</p>
                </div>
              </div>
              <p>{review.comment}</p>
              <hr className={style.devider} />
            </div>
          ))}
        {reviewpage.map((item, index) => (
          <button
            className={style.reviewPage}
            onClick={() => this.handlePageNumber(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  }
}
