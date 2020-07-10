import { Response, Request } from "express";


export const renderIndex = (req: Request, res: Response) => {
   res.render('index', { title: 'Home' })
}

