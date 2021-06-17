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
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.set('view engine', 'ejs');
        this.app.engine('html', require('ejs').renderFile);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'view')));
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
            var origin = req.headers.origin;
            res.setHeader('Access-Control-Allow-Origin', "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
        this.app.get('*', function (req, res, next) {
            res.sendFile(path_1.default.join(__dirname, './view/index.html'));
        });
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
