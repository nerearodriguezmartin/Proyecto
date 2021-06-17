"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horarioController_1 = __importDefault(require("../controllers/horarioController"));
class HorarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', horarioController_1.default.obtenerHorario);
    }
}
const horarioRoutes = new HorarioRoutes();
exports.default = horarioRoutes.router;
