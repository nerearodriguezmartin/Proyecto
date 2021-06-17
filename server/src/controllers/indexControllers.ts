import { Request, Response } from 'express';
import path from 'path';

class IndexController {
   public index (req: Request, res: Response) {
      res.json({text: 'API is /api/instalaciones'});
    //res.sendFile(path.join(__dirname, './../view/index.html'))
   } 
}


export const indexController = new IndexController();