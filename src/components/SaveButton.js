import React, { Component } from 'react';
import style from './SaveButton.module.scss';
import { ReactComponent as Hart } from '../svg/hart.svg';
import { withUser } from '../contexts/UserContext';
import classNames from 'classnames';

class SaveButton extends Component {
  render() {
    const { roomId } = this.props;
    const saved = this.props.savedRooms.some(item => item.pk == roomId);
    const savedButton = classNames(style.saveIcon, {
      [style.savedIcon]: saved,
    });
    return (
      <button
        onClick={() => this.props.handleSaveRoom(roomId)}
        className={style.saveButton}
      >
        <Hart className={savedButton} />
        <span className={style.saveBody}>{saved ? '저장됨' : '저장'}</span>
      </button>
    );
  }
}

export default withUser(SaveButton);
