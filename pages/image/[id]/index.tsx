import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar/Navbar'
import ImagePanel from '../../../components/Image panel page/ImagePanel'
import SimilarImages from '../../../components/Image panel page/SimilarImages'
import Head from 'next/head'
import ScreenLoader from '../../../components/Loaders/ScreenLoader'
import Footer from '../../../components/Footer/Footer'
import { LangContext } from '../../../pages/_app'
import { NextPage } from 'next'


const ImagePage: NextPage = () => {
    const [data, setData] = useState({
        url:"",
        name_en: "",
        name_bs: "",
        keywords: "",
        city: ""
    })
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    const { id } = router.query    
    
    const language = useContext(LangContext)

    useEffect(() => {
        if(id){
            setLoading(true)
            axios({
                method: "POST",
                url: "/api/image",
                data: {
                    id: id
                },
                withCredentials: true
            }).then(res => {setData(res.data)}).then(() => setLoading(false))
        }
    }, [id])


    return (
        <>
            <Head>
                <title>{language === "bosnian" ? data?.name_bs : data?.name_en}</title>
            </Head>

            <Navbar/>

            {loading ? <ScreenLoader height="calc(100vh - 60px)"/> :
            <>
                <ImagePanel data={data} language={language}/>

                <SimilarImages keywords={data?.keywords} id={id} language={language}/>
            </>}

            <Footer/>
        </>
    )
}

export default ImagePage