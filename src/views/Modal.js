import React from 'react';
import ReactDOM from 'react-dom';

import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
import ModalEnterPass from './ModalEnterPass';
import ModalSetPass from './ModalSetPass';

const cx = classNames.bind(styles)

const Modal = ({ isShowing, hide}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className={cx("modal-overlay")}/>
    <div className={cx("modal-wrapper")} aria-modal aria-hidden tabIndex={-1} role="dialog">
      {/* <ModalEnterPass  hide = {hide} />     */}
      <ModalSetPass  hide = {hide}/>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;