import axios from 'axios'
import Link from 'next/link'
import React, { useContext } from 'react'
import navbarStyle from "../../styles/Navbar.module.scss"
import { LangContext } from '../../pages/_app'

const Navbar = () => {

    const language = useContext(LangContext)

    const changeLanguage = (lang: string) => {        
        axios({
            method: "POST",
            url: "/api/language",
            data:{
              lang: lang
            },
            withCredentials: true
          }).then(() => window.location.reload())
    }



    return (
        <div className={navbarStyle.navbar}>
            <Link href="/">
                <h1 className={navbarStyle.logo}>photosFromBosnia</h1>
            </Link>
            <div className={navbarStyle.navbarRight}>
                {language === "bosnian" ? 
                <div className={navbarStyle.links}>
                    <Link href="/">
                        <p>POČETNA</p>
                    </Link>
                    <Link href="/upload">
                        <p>POSTAVI SLIKU</p>
                    </Link>
                </div>
                : <div className={navbarStyle.links}>
                    <Link href="/">
                        <p>HOME</p>
                    </Link>
                    <Link href="/upload">
                        <p>UPLOAD IMAGE</p>
                    </Link>
                </div>}
                <select className={navbarStyle.changeLangBtn} onChange={(e) => changeLanguage(e.target.value)} defaultValue={language}>
                    <option value="bosnian">Bosanski</option>
                    <option value="english">English</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar