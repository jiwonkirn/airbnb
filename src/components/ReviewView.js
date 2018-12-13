import React, { PureComponent } from 'react';
import style from './ReviewView.module.scss';
export default class ReviewView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      grade: '',
      comment: '',
    };
  }
  handleGrade(e) {
    this.setState({
      grade: parseInt(e.target.value),
    });
  }
  handleComment(e) {
    this.setState({
      comment: e.target.value,
      // comment: e.target.elements.comment.value, 과 뭐가 다른 건지 질문...
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const grade = this.state.grade;
    const comment = this.state.comment;
    this.props.onPost(grade, comment);
  }
  render() {
    const { grade } = this.state;
    // console.log(this.state.grade);
    // console.log(this.state.comment);
    return (
      <form onSubmit={e => this.handleSubmit(e)} action="">
        <div className={style.grade}>
          <label className={style.gradeText} htmlFor={style.gradeSelect}>
            별점
          </label>
          <select
            onChange={e => this.handleGrade(e)}
            className={style.gradeSelect}
            value={grade}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor={style.reviewText}>후기 작성란</label>
          <textarea
            onChange={e => this.handleComment(e)}
            className={style.reviewText}
            name="comment"
            id=""
            cols="30"
            rows="10"
          />
        </div>
        <button className={style.reviewBtn}>후기 쓰기</button>
      </form>
    );
  }
}
