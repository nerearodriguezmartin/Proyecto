import { Router } from 'express';

import reservasController from '../controllers/reservasController'

class ReservasRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/list', reservasController.list);
        this.router.get('/:id', reservasController.getOne);
        this.router.post('/', reservasController.create);
        this.router.delete('/:id', reservasController.delete);
        this.router.put('/:id', reservasController.update);
    }
}

const reservasRoutes = new ReservasRoutes();
export default reservasRoutes.router;