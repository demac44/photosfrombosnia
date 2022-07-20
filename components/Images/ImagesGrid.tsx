import React, { useContext } from 'react'
import imagesStyle from "../../styles/Images.module.scss"
import GridImage from './GridImage'
import { LangContext } from '../../pages/_app'


const ImagesGrid = (props: any) => {

  const language = useContext(LangContext)

  return (
    <>
      {props.data.length < 1 && <h3 className={imagesStyle.noImages}>{language === "bosnian" ? "Nema rezultata" : "No images found"}</h3>}
      <div className={imagesStyle.imagesContainer}>
            {props.data?.map((image: any) => <GridImage image={image} language={language} imagesStyle={imagesStyle} key={image.id}/>)}
      </div>
    </>
  )
}

export default ImagesGrid