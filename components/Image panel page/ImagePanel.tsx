import Image from 'next/image';
import React from 'react'
import imagePanelStyle from "../../styles/ImagePanel.module.scss"
import DownloadImageBtn from './DownloadImageBtn';

const ImagePanel = (props: any) => {

    return (
        <div className={imagePanelStyle.imagePanel}>
            
            <div className={imagePanelStyle.imagePanelTitle}>
                <h3>{props.language === "bosnian" ? props.data.name_bs : props.data.name_en}</h3>
                <p>{props.data.city}</p>
            </div>

            <div className={imagePanelStyle.imagePanelImageBox}>
                <div className={imagePanelStyle.imageOverlay}></div>
                <img src={props.data.url} className={imagePanelStyle.imagePanelImage} alt=""/>
            </div>

            <DownloadImageBtn imagePanelStyle={imagePanelStyle} language={props.language} name_bs={props.data.name_bs} name_en={props.data.name_en} url={props.data.url}/>
        </div>
    )
}

export default ImagePanel
