import React, { useContext, useState } from 'react'
import uploadStyle from "../../styles/Upload.module.scss"
import { LangContext } from '../../pages/_app'
import axios from 'axios'


const UploadForm = () => {
  const [image, setImage] = useState("")
  const [error, setError] = useState("")

  const language = useContext(LangContext)


  const upload = async (e: any) => {
    e.preventDefault()

    setError("")
    
    const name = e.target.name.value
    const city = e.target.city.value

    if(image === ""){
      setError("Image must be uploaded!")
      return
    }
    if(name.trim() === "" || city.trim() === ""){
      setError("All fields must be filled!")
      return
    }
    if(name.trim().length > 50){
      setError("Description can't be longer than 50 characters!")
      return
    }
    if(city.trim().length > 30){
      setError("City name can't be longer than 30 characters!")
      return
    }

    const url = await imageToCloudinary()
  
    axios({
      method: "POST",
      url: "/api/upload",
      data: {
        url: url,
        name: e.target.name.value,
        city: e.target.city.value
      }
    }).then(res => {
      if(res.data.uploaded) window.location.reload()
    }) 
    

  }

  const imageToCloudinary = async () => {
    let data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "z8oybloj")
    data.append("cloud_name", "de5mm13ux")
    data.append("folder", "photosfrombosnia")
    return await axios.post("https://api.cloudinary.com/v1_1/de5mm13ux/image/upload", data)
    .then((res: any) => {return res.data.secure_url;})
  }

  return (
    <div className={uploadStyle.uploadContainer}>
      <h2>Upload image</h2>
        <form className={uploadStyle.uploadForm} onSubmit={upload}>
            {error.length > 0 && <p className={uploadStyle.errorMsg}>{error}</p>}
            <input type="file" onChange={(e: any) => setImage(e.target.files[0])}/>
            <input name="name" id="name" placeholder={language === "bosnian" ? "Opis slike" : 'Image description'}/>
            <input name="city" id="city" placeholder={language === "bosnian" ? "Grad porijekla slike" : 'City where image is taken'}/>
            <button type="submit">UPLOAD</button>            
        </form>
    </div>
  )
}

export default UploadForm