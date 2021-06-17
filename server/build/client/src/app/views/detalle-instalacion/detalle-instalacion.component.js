"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleInstalacionComponent = void 0;
const core_1 = require("@angular/core");
const aws_amplify_1 = require("aws-amplify");
let DetalleInstalacionComponent = class DetalleInstalacionComponent {
    constructor(instalacionesService, horarioService, comunidadService, router, activatedRoute, notifierService, serviceReserva, loginService, likeService) {
        this.instalacionesService = instalacionesService;
        this.horarioService = horarioService;
        this.comunidadService = comunidadService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serviceReserva = serviceReserva;
        this.loginService = loginService;
        this.likeService = likeService;
        this.likes = [];
        this.instalacion = {
            cod_instalacion: 0,
            cod_comunidad: 0,
            hora_apertura: '',
            hora_cierre: '',
            aforo: 0,
            descripcion: '',
            tipo_instalacion: '',
            nombre: '',
            precio: 0,
            persona_ajeno: false,
            limpieza: 0,
            comunicacion: 0,
            ubicacion: 0,
            calidad: 0,
            img: '',
            img2: '',
            img3: '',
            reserva_maxima: 0
        };
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            autoplay: true,
            autoHeight: false,
            autoplayTimeout: 5000,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                }
            },
            nav: true
        };
        this.selected = "";
        this.pases = 1;
        this.guarda = false;
        this.horario = [];
        this.comunidad = {
            cod_comunidad: 0,
            nombre: "",
            ubicacion: "",
            mapa: ""
        };
        this.like = {
            id: 0,
            cod_instalacion: 0,
            username: "",
            created_at: new Date()
        };
        this.muestra = false;
        this.hoy = new Date();
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.getUsername;
        const params = this.activatedRoute.snapshot.params;
        if (params.cod_instalacion) {
            this.instalacionesService.getInstalacion(params.cod_instalacion)
                .subscribe(res => {
                console.log(res);
                this.instalacion = res;
                //this.edit = true;
            }, err => console.error(err));
            this.horarioService.getHorario(params.cod_instalacion).subscribe(res => {
                this.horario = res;
                console.log(res);
            }, err => console.log(err));
            this.comunidadService.getComunidad(params.cod_instalacion).subscribe(res => {
                this.comunidad = res;
                console.log(res);
            }, err => console.log(err));
            this.likeService.getLikes().subscribe(res => {
                this.likes = res;
            }, err => console.log(err));
            this.likes.forEach((like) => {
                if (like.username == this.loginService.userData.username && like.cod_instalacion == this.instalacion.cod_instalacion)
                    this.guarda = true;
            });
            console.log(this.guarda);
            console.log(this.likes);
        }
        this.reserva = {
            turno: "",
            cod_instalacion: 0,
            cod_reserva: 0,
            usuario: "",
            total: 0,
            num_pases: 0,
            fecha: new Date(0)
        };
        /*const chatbotElement = document.querySelector('amplify-chatbot');
        chatbotElement.addEventListener('chatCompleted', handleChatComplete);
    */
    }
    /*selectOption(id: number) {
      //getted from event
      console.log(id);
      //getted from binding
      console.log(this.selected)
    }*/
    ngOnDestroy() {
        /*const chatbotElement = document.querySelector('amplify-chatbot');
        chatbotElement.removeEventListener('chatCompleted', handleChatComplete);
      */ 
    }
    getUsername() {
        aws_amplify_1.Auth.currentAuthenticatedUser()
            .then(user => {
            this.userName = user.username;
        });
    }
    guardarReserva() {
        this.reserva = {
            turno: this.selected.toString(),
            cod_instalacion: this.instalacion.cod_instalacion,
            cod_reserva: 0,
            usuario: this.loginService.userData.username,
            total: 0,
            num_pases: this.pases,
            fecha: this.fecha
        };
        console.log(this.reserva);
        this.serviceReserva.setReserva(this.reserva);
        if (this.fecha != null && this.selected != null && this.pases != null)
            this.router.navigate(['confirmacion', this.instalacion.cod_instalacion]);
        else {
            this.notifier.show({
                type: 'error',
                message: 'Compruba que has rellenado todos los campos!',
                id: 'THAT_NOTIFICATION_ID', // Again, this is optional
            });
        }
    }
    guardaLike() {
        this.guarda = true;
        this.like.username = this.loginService.userData.username;
        this.like.cod_instalacion = this.instalacion.cod_instalacion;
        delete this.like.created_at;
        this.likeService.saveLike(this.like)
            .subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
    borraLike() {
        this.guarda = false;
        let mg = {};
        console.log(this.likes);
        this.likes.forEach((like) => {
            if (like.username == this.userName && like.cod_instalacion == this.instalacion.cod_instalacion)
                mg = like;
        });
        this.likeService.deleteLike(mg.id).subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
};
DetalleInstalacionComponent = __decorate([
    core_1.Component({
        selector: 'app-detalle-instalacion',
        templateUrl: './detalle-instalacion.component.html',
        styleUrls: ['./detalle-instalacion.component.scss']
    })
], DetalleInstalacionComponent);
exports.DetalleInstalacionComponent = DetalleInstalacionComponent;
