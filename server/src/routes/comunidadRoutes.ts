import { Router } from 'express';

import comunidadController from '../controllers/comunidadController'

class ComunidadRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/:id', comunidadController.getOne);
       
    }
}

const comunidadRoutes = new ComunidadRoutes();
export default comunidadRoutes.router;