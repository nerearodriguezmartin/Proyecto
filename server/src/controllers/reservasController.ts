import { Request, Response } from 'express';

import db from '../database'

class ReservasController {
   public async list (req: Request, res: Response) {
       const reservas = await db.query("SELECT * FROM reserva");
        res.json(reservas);
    } 

   public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const reserva = await db.query("SELECT * FROM reserva WHERE cod_reserva= ?", [id]);
        
        if (reserva.length > 0) {
            return res.json(reserva[0]);
        }
        res.status(404).json({text: "La reserva que busca no existe"});
        
        res.json({message: 'Reserva encontrada'});
   } 

   public async create (req: Request, res: Response): Promise<void> {
       await db.query('INSERT INTO reserva set ?', [req.body])
       res.json({message: 'Reserva guardada'});
   }

   public async delete (req: Request, res: Response){
    const { id } = req.params;
    await db.query('DELETE FROM reserva WHERE cod_reserva = ?', [id])
    res.json({message: 'Reserva borrada'});
   }

   public async update (req: Request, res: Response){
    const { id } = req.params;
    await db.query('UPDATE reserva set ? WHERE cod_reserva = ?', [id])
    res.json({message: 'Reserva actualizada'});
}


}


const reservasController = new ReservasController();

export default reservasController;