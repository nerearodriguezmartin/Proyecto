"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const instalacionRoutes_1 = __importDefault(require("./routes/instalacionRoutes"));
const horarioRoutes_1 = __importDefault(require("./routes/horarioRoutes"));
const comunidadRoutes_1 = __importDefault(require("./routes/comunidadRoutes"));
const likesRoutes_1 = __importDefault(require("./routes/likesRoutes"));
const reservasRoutes_1 = __importDefault(require("./routes/reservasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 8080);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/instalaciones', instalacionRoutes_1.default);
        this.app.use('/api/instalaciones/horario', horarioRoutes_1.default);
        this.app.use('/api/instalaciones/ubicacion', comunidadRoutes_1.default);
        this.app.use('/api/instalaciones/likes', likesRoutes_1.default);
        this.app.use('/api/instalaciones/reservas', reservasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
