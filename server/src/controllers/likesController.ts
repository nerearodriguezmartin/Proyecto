import { Request, Response } from 'express';

import db from '../database'

class LikesController {
  
    public async list (req: Request, res: Response) {
        const likes = await db.query("SELECT * FROM likes");
         res.json(likes);
     } 

   public async create (req: Request, res: Response): Promise<void> {
       await db.query('INSERT INTO likes set ?', [req.body]);
       const {id} =  await db.query('select id from likes where id= ?', req.body.id);
       res.json(id);
   }

   public async delete (req: Request, res: Response){
    const { id } = req.params;
    await db.query('DELETE FROM likes WHERE cod_instalacion = ?', [id])
    res.json({message: 'Like borrado'});
   }



}


const likesController = new LikesController();

export default likesController;