import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../utils/db/index.js"



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { url, name, city } = req.body
    
    const keywords = (name+" "+city).toLowerCase().split(" ")

    db.collection("images").add({
        name_en: name,
        name_bs: name,
        url: url,
        city: city,
        keywords: keywords
    }).then(() => res.json({uploaded: true}))
    .catch(e => {
        console.log(e);
        res.json({uploaded: false})
    })
}


