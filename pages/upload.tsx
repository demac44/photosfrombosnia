import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import UploadForm from '../components/Upload image/UploadForm'

const upload: NextPage = () => {
  return (
    <>
        <Head>
          <title>Upload image</title>
        </Head>

        <Navbar/>

        <UploadForm/>

        <Footer/>
    </>
  )
}

export default upload