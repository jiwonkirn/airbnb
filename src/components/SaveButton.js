import React, { Component } from 'react';
import style from './SaveButton.module.scss';
import { ReactComponent as Hart } from '../svg/hart.svg';
import { withUser } from '../contexts/UserContext';
import classNames from 'classnames';
import SavedAlertView from './SavedAlertView';

let clearModal;

class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
    };
  }

  handleAlert = async () => {
    await this.setState({
      alert: true,
    });
    clearModal = await setTimeout(() => {
      this.setState({
        alert: false,
      });
    }, 3000);
  };

  handleClear = () => {
    clearTimeout(clearModal);
    this.setState({
      alert: false,
    });
  };

  render() {
    const { roomId, saved } = this.props;
    const savedButton = classNames(style.saveIcon, {
      [style.savedIcon]: saved,
    });
    return (
      <>
        <button
          onClick={() => {
            this.props.onHandleSaveRoom(roomId);
            this.handleAlert();
          }}
          className={style.saveButton}
        >
          <Hart className={savedButton} />
          <span className={style.saveBody}>{saved ? '저장됨' : '저장'}</span>
        </button>
        <SavedAlertView
          handleClear={this.handleClear}
          {...this.state}
          saved={saved}
        />
      </>
    );
  }
}

export default withUser(SaveButton);
