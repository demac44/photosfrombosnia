import React from 'react'
import loaderStyle from "../../styles/Loaders.module.scss"

const ScreenLoader = (props: any) => {
  return (
    <div className={loaderStyle.screenLoader}  style={{height: props.height || "70vh"}}>
        <div className={loaderStyle.loader}></div>
    </div>
  )
}

export default ScreenLoader