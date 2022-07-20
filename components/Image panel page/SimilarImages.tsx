import React, { useEffect, useState } from 'react'
import imagePanelStyle from "../../styles/ImagePanel.module.scss"
import axios from 'axios'
import SimilarImage from './SimilarImage'
import ScreenLoader from '../Loaders/ScreenLoader'


const SimilarImages = (props: any) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios({
            method: "POST",
            url: "/api/similar_images",
            data:{
                keywords: props.keywords,
                id: props.id
            }
        }).then(res => {setData(res.data)}).then(() => setLoading(false))
    }, [props.id, props.keywords])



    return (
        <div className={imagePanelStyle.similarImagesContainer}>
            {loading ? <ScreenLoader height="500px"/> : 
            <>
                <h2>{props.language === "bosnian" ? "Slične slike" : "Similar images"}</h2>
                <hr/>
                <div className={imagePanelStyle.similarImagesBox}>
                    {data.map((image: any) => <SimilarImage image={image} imagePanelStyle={imagePanelStyle} language={props.language} key={image.id}/>)}
                </div>
            </>}
        </div>
    )
}

export default SimilarImages