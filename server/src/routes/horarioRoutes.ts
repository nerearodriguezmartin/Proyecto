import { Router } from 'express';

import horarioController from '../controllers/horarioController'

class HorarioRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/:id', horarioController.obtenerHorario);
       
    }
}

const horarioRoutes = new HorarioRoutes();
export default horarioRoutes.router;