import React from 'react'

function ImageSwitchIcon(props) {
  return (
    <i id = {props.id} className={props.icon} onClick ={props.onClick}></i>
  )
}

export default ImageSwitchIcon;