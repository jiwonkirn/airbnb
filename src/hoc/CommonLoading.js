import React, { Component } from 'react';
import style from './CommonLoading.module.scss';

class CommonLoading extends Component {
  render() {
    return (
      <section className={style.loadingContainer}>
        <ul className={style.loadingItemContainer}>
          <li className={style.loadingItem} />
          <li className={style.loadingItem} />
          <li className={style.loadingItem} />
        </ul>
      </section>
    );
  }
}

export default function withCommonLoading(WrappedComponent) {
  return function WithCommonLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return <CommonLoading />;
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}
