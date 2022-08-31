import React from 'react'
import classNames from 'classnames/bind'
import styles from './InputModal.module.scss'

const cx = classNames.bind(styles)
export default function InputModal({children,value,className,id,onChange}) {
  const classes = cx("input-pass" , {
    [className]:className
  })
  return (
  
    <input type="password" value={value} onChange={onChange} id={id} className={classes}>{children}</input>

  )
}

