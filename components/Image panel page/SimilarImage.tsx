import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SimilarImage = (props: any) => {
  return (
    <Link href={"/image/"+props.image.id}>
        <div  className={props.imagePanelStyle.similarImageBox}>
            <div className={props.imagePanelStyle.similarImageBoxOverlay}><p>{props.language === "bosnian" ? "Kliknite za otvaranje slike" : "Click to open image"}</p></div>
            <Image layout="fill" src={props.image.url} className={props.imagePanelStyle.image} alt=""/>
        </div>
    </Link>  )
}

export default SimilarImage