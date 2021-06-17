"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likesController_1 = __importDefault(require("../controllers/likesController"));
class LikesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/list', likesController_1.default.list);
        this.router.post('/', likesController_1.default.create);
        this.router.delete('/:id', likesController_1.default.delete);
    }
}
const likesRoutes = new LikesRoutes();
exports.default = likesRoutes.router;
