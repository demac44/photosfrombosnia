import React, { useEffect, useState, useContext } from 'react'

const DownloadImageBtn = (props: any) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)


    function getMeta(url: string){   
        const img = new Image();
        img.src = url
        img.addEventListener("load", function() {
            setWidth(this.width)
            setHeight(this.height)
        });
    }


    useEffect(() => {
        getMeta(props.url)
    }, [getMeta, props.url])


    const toDataURL = async (url: string) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }
    
    const download = async () =>{
        const a = document.createElement("a");
        a.href = await toDataURL(props.url);
        a.download = (props.language === "bosnian" ? props.name_bs : props.name_en) + ".png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }



    return (
        <div className={props.imagePanelStyle.downloadImageBox}>
            <span onClick={download} className={props.imagePanelStyle.downloadImageBtn}>{props.language === "bosnian" ? "Preuzmi sliku" : "Download image"}</span>
            {<p className={props.imagePanelStyle.imageSize}>{width + "x" + height}</p>}
        </div>
    )
}

export default DownloadImageBtn