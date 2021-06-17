import { Request, Response } from 'express';

import db from '../database'

class ComunidadController {


   public async getOne (req: Request, res: Response) {
        const { id } = req.params;
       
        const comunidad = await db.query("SELECT * FROM comunidad WHERE cod_comunidad= (SELECT cod_comunidad FROM instalacion WHERE cod_instalacion= ?)", [id]);

            return res.json(comunidad[0]);
        
        
   } 

}

const comunidadController = new ComunidadController();

export default comunidadController;