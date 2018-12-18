import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Range } from 'rc-slider';
import classNames from 'classnames';
import 'rc-slider/assets/index.css';
import './PriceControlView.scss';
import style from './PriceControlView.module.scss';
import { withSearch } from '../contexts/SearchContext';

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

  componentDidMount = () => {
    const { min_price: min, max_price: max } = this.props;
    this.setState({
      min,
      max,
    });
  };

  handleSelect = async e => {
    e.stopPropagation();
    await this.setState(prev => {
      return { selected: !prev.selected };
    });
    if (!this.state.selected) {
      this.props.handlePersonCapacitySearch();
    }
  };

  handleChange = ([a, b]) => {
    this.props.handlePrice(a, b);
  };

  render() {
    const { selected } = this.state;
    const { min_price: min, max_price: max } = this.props;
    const filtered = min > 0 || max < 200000;
    const viewControler = classNames(style.priceControl, {
      [style.view]: selected,
    });
    const priceControlNav = classNames(style.priceControlContainer, {
      [style.filtered]: filtered,
      [style.view]: selected,
    });
    const viewModal = classNames(style.modal, { [style.view]: selected });
    return (
      <section className={style.container}>
        <li className={priceControlNav} onClick={e => this.handleSelect(e)}>
          {filtered ? `₩${min} - ₩${max}` : '가격'}
        </li>
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
          <button
            className={style.initialOptionButton}
            onClick={() => this.handleChange([0, 200000])}
          >
            초기화
          </button>
          <button
            onClick={this.handleSelect}
            className={style.applyOptionButton}
          >
            적용
          </button>
        </section>
        <div onClick={this.handleSelect} className={viewModal} />
      </section>
    );
  }
}

export default withSearch(withRouter(OptionControlView));
