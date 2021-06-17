import express, { Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import instalacionesRoutes from './routes/instalacionRoutes';
import horarioRoutes from './routes/horarioRoutes';
import comunidadRoutes from './routes/comunidadRoutes';
import likesRoutes from './routes/likesRoutes'
import reservasRoutes from './routes/reservasRoutes';
import path from 'path';
class Server {

    public app : Application; 

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.set('view engine', 'ejs');

        /*this.app.engine('html', require('ejs').renderFile);
        //this.app.use(express.static(path.join(__dirname, 'view')))
        this.app.use(function(req, res, next) {
    
            res.setHeader("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
      
      
            var origin = req.headers.origin;
            res.setHeader('Access-Control-Allow-Origin', "*");
    
          
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });

        this.app.get('*', function(req, res, next){
            res.sendFile(path.join(__dirname, './view/index.html'))
        })*/
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/instalaciones' ,instalacionesRoutes);
        this.app.use('/api/instalaciones/horario' ,horarioRoutes);
        this.app.use('/api/instalaciones/ubicacion' ,comunidadRoutes);
        this.app.use('/api/instalaciones/likes' , likesRoutes);
        this.app.use('/api/instalaciones/reservas' , reservasRoutes);
    }


    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        })
    }

} 

const server = new Server();
server.start();