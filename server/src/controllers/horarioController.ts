import { Request, Response } from 'express';

import db from '../database'

class HorarioController {
   /*public async list (req: Request, res: Response) {
       const instalaciones = await db.query("SELECT * FROM instalacion");
        res.json(instalaciones);
    } */

   public async obtenerHorario (req: Request, res: Response) {
        const { id } = req.params;
        const turnos = await db.query("SELECT tramo_horario FROM turno, turno_instalacion WHERE turno.cod_turno = turno_instalacion.cod_turno AND cod_instalacion= ?", [id]);
        if (turnos.length > 0) {
            return res.json(turnos);
        }
        res.status(404).json({text: "La instalación que busca no existe"});
        
        res.json({message: 'Horario encontrado'});
   } 

   /*public async create (req: Request, res: Response): Promise<void> {
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
}*/
}


const horarioController = new HorarioController();

export default horarioController;