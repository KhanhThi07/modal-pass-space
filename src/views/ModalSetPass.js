import React from 'react';
import {ReactComponent as Close} from '../assets/icon/Union.svg'

import classNames from 'classnames/bind'
import styles from './ModalSetPass.module.scss'
import InputModal from './InputModal';
import ButtonModal from './ButtonModal';

const cx = classNames.bind(styles)

export default function ModalEnterPass({hide}) {

  return (
    <div className={cx("modal")}>
    <span className={cx("modal-close")} onClick={hide}  aria-hidden="true"><Close/></span>
        <div className={cx("modal-header")} >
            <span className={cx("modal-header__title")}> Set a password for your space</span>
        </div>
        <div className={cx("modal-line")}></div>
        <div className={cx("modal-content")}>          
          <span className={cx("modal-content__title")}>Password</span>      
          <div className={cx("modal-content__pass")}>
            <InputModal className={cx("input-pass")}></InputModal>
          </div>  
        </div>
        <div className={cx("modal-content")}>          
          <span className={cx("modal-content__title")}>Confirm Password</span>      
          <div className={cx("modal-content__pass")}>
            <InputModal></InputModal>
          </div>        
          <div className={cx("modal-content__button")}>
            <ButtonModal  className={cx("btn-cancel")} handleOnClick={hide}>Cancel</ButtonModal>       
            <ButtonModal  className={cx("btn-join")}>Join</ButtonModal>             
          </div>       
        </div>
   
    </div>
  )
}


