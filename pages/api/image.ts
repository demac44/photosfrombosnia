import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../utils/db/index.js"



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
    const { id } = req.body    

    const colRef = db.collection("images").doc(id)
    const doc = await colRef.get()

    if(!doc.exists){
        res.json(404)
    } else {
        res.json(doc.data())
        
    }

  }
