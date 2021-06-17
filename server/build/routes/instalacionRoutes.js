"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instalacionesControllers_1 = __importDefault(require("../controllers/instalacionesControllers"));
class InstalacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', instalacionesControllers_1.default.list);
        this.router.get('/tipo/list', instalacionesControllers_1.default.tipo);
        this.router.get('/:id', instalacionesControllers_1.default.getOne);
        this.router.post('/', instalacionesControllers_1.default.create);
        this.router.delete('/:id', instalacionesControllers_1.default.delete);
        this.router.put('/:id', instalacionesControllers_1.default.update);
    }
}
const instalacionesRoutes = new InstalacionesRoutes();
exports.default = instalacionesRoutes.router;
