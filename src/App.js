import React from 'react';
import Modal from "./views/Modal";
import useModal from './views/useModal';
import classNames from 'classnames/bind'
import styles from './style.module.scss'

const cx = classNames.bind(styles)

const App = () => {
  const {isShowing, toggle} = useModal();

  return (
    <div className={cx("app")}>
      <button className={cx("button-default")} onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />

    </div>
  );
};


export default App;