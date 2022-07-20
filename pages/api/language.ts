import type { NextApiRequest, NextApiResponse } from 'next'
import { Cookies } from 'next/dist/server/web/spec-extension/cookies'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { lang } = req.body
    
    
    if(lang && req.cookies.language !== lang){
        res.setHeader("set-cookie", `language=${lang}; path=/; samesite=lax; httponly;`)
    } else if (!lang && !req.cookies.language){
        res.setHeader("set-cookie", `language=english; path=/; samesite=lax; httponly;`)
    }
    
    res.json({language: req.cookies.language})

}



