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
class ReservasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reservas = yield database_1.default.query("SELECT * FROM reserva");
            res.json(reservas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reserva = yield database_1.default.query("SELECT * FROM reserva WHERE cod_reserva= ?", [id]);
            if (reserva.length > 0) {
                return res.json(reserva[0]);
            }
            res.status(404).json({ text: "La reserva que busca no existe" });
            res.json({ message: 'Reserva encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reserva set ?', [req.body]);
            res.json({ message: 'Reserva guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM reserva WHERE cod_reserva = ?', [id]);
            res.json({ message: 'Reserva borrada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reserva set ? WHERE cod_reserva = ?', [id]);
            res.json({ message: 'Reserva actualizada' });
        });
    }
}
const reservasController = new ReservasController();
exports.default = reservasController;
