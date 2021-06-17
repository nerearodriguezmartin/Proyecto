import { Router } from 'express';

import instalacionesController from '../controllers/instalacionesControllers'

class InstalacionesRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', instalacionesController.list);
        this.router.get('/tipo/list', instalacionesController.tipo);
        this.router.get('/:id', instalacionesController.getOne);
        this.router.post('/', instalacionesController.create);
        this.router.delete('/:id', instalacionesController.delete);
        this.router.put('/:id', instalacionesController.update);
    }
}

const instalacionesRoutes = new InstalacionesRoutes();
export default instalacionesRoutes.router;