import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Range } from 'rc-slider';
import classNames from 'classnames';
import 'rc-slider/assets/index.css';
import './PriceControlView.scss';
import style from './PriceControlView.module.scss';

const marks = {
  0: '0',
  10000: '10K',
  30000: '30K',
  50000: '50K',
  100000: '100K',
  200000: '200K',
};

class OptionControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      min: 0,
      max: 200000,
    };
  }

  handleSelect = () => {
    this.setState(prev => {
      return { selected: !prev.selected };
    });
  };

  handleChange = ([a, b]) => {
    this.setState({
      min: a,
      max: b,
    });
  };

  render() {
    const { min, max, selected } = this.state;
    const viewControler = classNames(style.priceControl, {
      [style.view]: selected,
    });
    const viewModal = classNames(style.modal, { [style.view]: selected });
    return (
      <>
        <li className={style.priceControlContainer} onClick={this.handleSelect}>
          가격
          <section className={viewControler}>
            <h3 className={style.heading}>가격 범위를 설정해주세요.</h3>
            <Range
              min={0}
              max={200000}
              step={5000}
              value={[min, max]}
              marks={marks}
              onChange={this.handleChange}
            />
            <p className={style.priceValue}>
              <span className={style.minPrice}>₩{min}</span> -
              <span className={style.maxPrice}> ₩{max}</span>
            </p>
            <button className={style.applyOptionButton}>적용</button>
          </section>
        </li>
        <div className={viewModal} />
      </>
    );
  }
}

export default withRouter(OptionControlView);
