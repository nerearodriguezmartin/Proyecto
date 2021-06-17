"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comunidadController_1 = __importDefault(require("../controllers/comunidadController"));
class ComunidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', comunidadController_1.default.getOne);
    }
}
const comunidadRoutes = new ComunidadRoutes();
exports.default = comunidadRoutes.router;
