import React, { useContext, useState } from 'react'
import searchStyle from "../../styles/Search.module.scss"
import { useRouter } from 'next/router'
import { LangContext } from '../../pages/_app'

const SearchBar = (props: any) => {
  const [query, setQuery] = useState(props.defaultQuery || "")

  const router = useRouter()

  const language = useContext(LangContext)  


  const search = (e: any) => {
    e.preventDefault()

    let q = query.trim()

    if(q === ""){
      return
    } else {
      router.push("/search/"+q)
    }
  }

  return (
    <div className={searchStyle.searchBox}>
      <form onSubmit={search}>
        <input 
          name="search_input" 
          id="search_input" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className={searchStyle.searchInput} 
          placeholder={language === "bosnian" ? "Pretraži slike..." : "Search images..."}
          />
        {query.length > 0 && <button className={searchStyle.submitBtn} type="submit"><i className='fas fa-search'></i></button>}
        {query.length > 0 && <span><i onClick={() => setQuery("")} className='fas fa-times'></i></span>}
      
      </form>
    </div>
  )
}

export default SearchBar