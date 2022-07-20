import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../utils/db/index.js"



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // const colRef = db.collection("images").get()


    // const docs = (await colRef).docs

    // docs.forEach((doc: any) => {
    //     let arr = doc.data().keywords
    //     let newarr = arr.filter((word:any) => {
    //         return word != "bosnia" && word != "bosna" && word != "herzegovina" && word != "hercegovina" && word != "-"
    //     })

    //     let unique = [...new Set(newarr)]
        
    //     db.collection("images").doc(doc.id).set({
    //         ...doc.data(), keywords: unique
    //     })
    // })

    res.send(200)
}



