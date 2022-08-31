import React from 'react';
import classNames from 'classnames/bind'
import styles from './ButtonModal.module.scss'

const cx = classNames.bind(styles)

export default function ButtonModal({children,className,handleOnClick}) {     
  const classes = cx("btn" , {
    [className]:className
  })
  return (
   
    <button type="button" className={classes} onClick={handleOnClick} >{children}</button>
  )
}
