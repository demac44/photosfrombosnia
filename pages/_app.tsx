import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useEffect, createContext, useState } from "react" 
import axios from 'axios';

export const LangContext = createContext("english")

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("english")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios({
      method: "POST",
      url: "/api/language",
      withCredentials: true
    }).then((res) => setLanguage(res.data.language)).then(() => setLoading(false))
  }, [])


  return (
    <>
      <LangContext.Provider value={language}>
        <Script src="https://kit.fontawesome.com/58812d83b9.js" crossOrigin="anonymous"></Script>

        {loading ? "" : <Component {...pageProps} />}
      </LangContext.Provider>
    </>
  )
}

export default MyApp
