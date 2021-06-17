"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InstalacionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const instalaciones = yield database_1.default.query("SELECT * FROM instalacion");
            res.json(instalaciones);
        });
    }
    tipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipos = yield database_1.default.query("SELECT DISTINCT tipo_instalacion FROM instalacion");
            res.json(tipos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const instalacion = yield database_1.default.query("SELECT * FROM instalacion WHERE cod_instalacion= ?", [id]);
            if (instalacion.length > 0) {
                return res.json(instalacion[0]);
            }
            res.status(404).json({ text: "La instalación que busca no existe" });
            res.json({ message: 'Instalación encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO instalacion set ?', [req.body]);
            res.json({ message: 'instalación guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM instalacion WHERE cod_instalacion = ?', [id]);
            res.json({ message: 'Instalación borrada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE instalacion set ? WHERE cod_instalacion = ?', [id]);
            res.json({ message: 'Instalacion actualizada' });
        });
    }
}
const instalacionesController = new InstalacionesController();
exports.default = instalacionesController;
