import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../utils/db/index.js"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const colRef = db.collection("images").limit(25).get() 

  let lista: any = []

  const docs = (await colRef).docs

  docs.forEach((doc: any) => {
    lista.push({...doc.data(), id: doc.id})
  })
  

  res.json(lista)
  }
