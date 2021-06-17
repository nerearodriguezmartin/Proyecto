"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservasController_1 = __importDefault(require("../controllers/reservasController"));
class ReservasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/list', reservasController_1.default.list);
        this.router.get('/:id', reservasController_1.default.getOne);
        this.router.post('/', reservasController_1.default.create);
        this.router.delete('/:id', reservasController_1.default.delete);
        this.router.put('/:id', reservasController_1.default.update);
    }
}
const reservasRoutes = new ReservasRoutes();
exports.default = reservasRoutes.router;
