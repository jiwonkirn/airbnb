import React, { Component } from 'react';
import style from './Layout.module.scss';
import { ReactComponent as Logo } from '../svg/logo.svg';
import classNames from 'classnames';

export default class extends React.Component {
  render() {
    return <Logo className={style.logo} />;
  }
}
