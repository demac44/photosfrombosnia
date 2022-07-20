import type { NextPage } from 'next'
import Head from 'next/head'
import SearchBar from '../components/Homepage/SearchBar'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ScreenLoader from '../components/Loaders/ScreenLoader'
import Footer from '../components/Footer/Footer'
import { LangContext } from './_app'
import ImagesGrid from '../components/Images/ImagesGrid'

const Home: NextPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const language = useContext(LangContext)
  
  useEffect(() => {
    setLoading(true)
    axios.get("/api/home_images").then((res: any) => {setData(res.data)}).then(() => setLoading(false))
  }, [])

  return (
    <div className='home-page'>
      <Head>
        <title>Photos from Bosnia</title>
      </Head>

      <Navbar/>

      <SearchBar/>

      <h1 className={styles.introText}>{language === "bosnian" ? "Pretraži 1000+ slika iz Bosne i Hercegovine" : "Search 1000+ images from Bosnia and Herzegovina"}</h1>

      {loading ? <ScreenLoader height="80vh"/> : <ImagesGrid data={data}/>}

      <Footer/>

    </div>
  )
}

export default Home
