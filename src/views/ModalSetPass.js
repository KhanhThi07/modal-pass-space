import React from 'react';
import {ReactComponent as Close} from '../assets/icon/Union.svg'

import classNames from 'classnames/bind'
import styles from './ModalSetPass.module.scss'
import InputModal from './InputModal';
import ButtonModal from './ButtonModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

export default function ModalEnterPass({hide}) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [confirm, setConfirm] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirm = () => {
    setConfirm({ ...confirm, showPassword: !confirm.showPassword });
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleConfirmChange = (prop) => (event) => {
    setConfirm({ ...confirm, [prop]: event.target.value });
  };
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
            <InputModal  
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
            />            
            {values.showPassword ?
              <FontAwesomeIcon 
              className={cx("icon-pass")} 
              icon={faEye} 
              onClick={handleClickShowPassword}
              />        
              : <FontAwesomeIcon 
              className={cx("icon-pass")} 
              icon={faEyeSlash} 
              onClick={handleClickShowPassword}
              />
            }

          </div>  
        </div>
        <div className={cx("modal-content")}>          
          <span className={cx("modal-content__title")}>Confirm Password</span>      
          <div className={cx("modal-content__pass")}>
            <InputModal  
              type={confirm.showPassword ? "text" : "password"}
              onChange={handleConfirmChange("password")}
              value={confirm.password}
            />            
            {confirm.showPassword ?
              <FontAwesomeIcon 
              className={cx("icon-pass")} 
              icon={faEye} 
              onClick={handleClickShowConfirm}
              />        
              : <FontAwesomeIcon 
              className={cx("icon-pass")} 
              icon={faEyeSlash} 
              onClick={handleClickShowConfirm}
              />
            }

          </div>        
          <div className={cx("modal-content__button")}>
            <ButtonModal  className={cx("btn-cancel")} handleOnClick={hide}>Cancel</ButtonModal>       
            <ButtonModal  className={cx("btn-join")}>Save</ButtonModal>             
          </div>       
        </div>
   
    </div>
  )
}


