import axios from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer/Footer'
import SearchBar from '../../../components/Homepage/SearchBar'
import ImagesGrid from '../../../components/Images/ImagesGrid'
import ScreenLoader from '../../../components/Loaders/ScreenLoader'
import Navbar from '../../../components/Navbar/Navbar'

const Search: NextPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const router = useRouter()

    const { query } = router.query

    const search = (searchQuery: any) => {
        setLoading(true)
        if(query){
            axios({
                method: "POST",
                url: "/api/search",
                data: {
                    query: searchQuery
                }
            }).then(res => {setData(res.data)}).then(() => setLoading(false))
        }
    }

    useEffect(() => {
        search(query)
    }, [query])
    
    
    return (
        <>
            <Head>
                <title>Search images</title>
            </Head>

            <Navbar/>

            <SearchBar defaultQuery={query}/>

            {loading ? <ScreenLoader/> : <ImagesGrid data={data}/>}

            <Footer/>
        </>
    )
}

export default Search