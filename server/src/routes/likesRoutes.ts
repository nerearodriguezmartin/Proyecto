import { Router } from 'express';

import likesController from '../controllers/likesController'

class LikesRoutes {
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/list', likesController.list);
        this.router.post('/', likesController.create);
        this.router.delete('/:id', likesController.delete);
    }
}

const likesRoutes = new LikesRoutes();
export default likesRoutes.router;