import React from 'react'

const Button = ({btn_text,className,onClick}) => {
  return (
    <>
    <button className={className} onClick={onClick}>{btn_text}</button>
    </>
  )
}

export default Button