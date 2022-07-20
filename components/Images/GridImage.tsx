import Link from 'next/link'
import React from 'react'
import Image from "next/image"


const GridImage = (props: any) => {
  return (
    <Link href={"/image/"+props.image.id}>
        <div  className={props.imagesStyle.imageBox}>
            <div className={props.imagesStyle.imageBoxOverlay}><p>{props.language === "bosnian" ? "Kliknite za otvaranje slike" : "Click to open image"}</p></div>
            <Image layout='fill' src={props.image.url} className={props.imagesStyle.image} alt=""/>
        </div>
    </Link>
  )
}

export default GridImage