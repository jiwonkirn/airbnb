import React, { Component } from 'react';
import style from './CommonSmallLoading.module.scss';

class CommonSmallLoading extends Component {
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

export default function withSmallCommonLoading(WrappedComponent) {
  return function WithSmallCommonLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return <CommonSmallLoading />;
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}
