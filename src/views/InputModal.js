import React from 'react'
import classNames from 'classnames/bind'
import styles from './InputModal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
export default function InputModal({type,children,value,className,id,onChange}) {
  const classes = cx("input-pass" , {
    [className]:className
  })
  return (
  
    <input type={type} value={value} onChange={onChange} id={id} className={classes}>
      {children}</input>

  )
}

