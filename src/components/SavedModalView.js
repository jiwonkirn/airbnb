import React, { Component } from 'react';
import style from './SavedModal.module.scss';
import { Link } from 'react-router-dom';
import { withUser } from '../contexts/UserContext';
import classNames from 'classnames';
import SavedModalItemView from './SavedModalItemView';

class SavedModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    this.setState({
      selected: true,
    });
    document.addEventListener('click', this.handleRemove);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleRemove);
  }

  handleRemove = e => {
    e.stopPropagation();
    if (
      e.target.hasAttribute('class')
        ? !e.target.getAttribute('class').includes('SavedModal')
        : true
    ) {
      this.props.onSavedModal();
    }
  };

  render() {
    const { savedRooms } = this.props;
    const savedItem = classNames(style.savedItem, { clearfix: true });
    return (
      <section key={this.props.keyProp} className={style.savedModalContainer}>
        <div className={style.titleContainer}>
          <h2 className={style.title}>목록</h2>
          <span
            className={style.linkToList}
            onClick={() => this.props.onSavedModal()}
          >
            닫기
          </span>
        </div>
        <SavedModalItemView {...this.props} />
        {/* <div className={style.background} onClick={this.props.onSavedModal} /> */}
      </section>
    );
  }
}

export default withUser(SavedModal);
