import { Request, Response } from 'express';

import db from '../database'

class InstalacionesController {
   public async list (req: Request, res: Response) {
       const instalaciones = await db.query("SELECT * FROM instalacion");
        res.json(instalaciones);
    } 

    public async tipo (req: Request, res: Response) {
        const tipos = await db.query("SELECT DISTINCT tipo_instalacion FROM instalacion");
         res.json(tipos);
     } 

   public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const instalacion = await db.query("SELECT * FROM instalacion WHERE cod_instalacion= ?", [id]);
        
        if (instalacion.length > 0) {
            return res.json(instalacion[0]);
        }
        res.status(404).json({text: "La instalación que busca no existe"});
        
        res.json({message: 'Instalación encontrada'});
   } 

   public async create (req: Request, res: Response): Promise<void> {
       await db.query('INSERT INTO instalacion set ?', [req.body])
       res.json({message: 'instalación guardada'});
   }

   public async delete (req: Request, res: Response){
    const { id } = req.params;
    await db.query('DELETE FROM instalacion WHERE cod_instalacion = ?', [id])
    res.json({message: 'Instalación borrada'});
   }

   public async update (req: Request, res: Response){
    const { id } = req.params;
    await db.query('UPDATE instalacion set ? WHERE cod_instalacion = ?', [id])
    res.json({message: 'Instalacion actualizada'});
}


}


const instalacionesController = new InstalacionesController();

export default instalacionesController;