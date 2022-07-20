import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../utils/db/index.js"



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { query } = req.body


    const colRef = db.collection("images").where("keywords", "array-contains", query).get()


    const docs = (await colRef).docs

    let images: Array<any> = []

    docs.forEach((doc: any) => {
            images.push({...doc.data(), id: doc.id})
    })

    res.json(images)
}





