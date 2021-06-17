"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmacionComponent = void 0;
const core_1 = require("@angular/core");
let ConfirmacionComponent = class ConfirmacionComponent {
    constructor(servicio, instalacionesService, activatedRoute, loginService) {
        this.servicio = servicio;
        this.instalacionesService = instalacionesService;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
    }
    ngOnInit() {
        /* this.servicio.reservaEmitter.subscribe(
           data => {
             this.reserva = data;
             console.log(this.reserva);
           }
         );
         console.log(this.reserva);*/
        this.reserva = this.servicio.obtenerReserva();
        const params = this.activatedRoute.snapshot.params;
        if (params.cod_instalacion) {
            this.instalacionesService.getInstalacion(params.cod_instalacion)
                .subscribe(res => {
                console.log(res);
                this.instalacion = res;
                //this.edit = true;
            }, err => console.error(err));
        }
        this.payPalConfig = {
            currency: "EUR",
            clientId: "AZXY4K0dUBazE1OTSNMJdP2Zpmg9k0WbOUcWRwebrjR9RyJTWBS3ULUhQKFfnwOOa4oc9NilhV4iXlzD",
            createOrder: (data) => ({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: "EUR",
                            value: "0.01",
                            breakdown: {
                                item_total: {
                                    currency_code: "EUR",
                                    value: "0.01"
                                }
                            }
                        },
                        items: [
                            {
                                name: "Enterprise Subscription",
                                quantity: "1",
                                category: "DIGITAL_GOODS",
                                unit_amount: {
                                    currency_code: "EUR",
                                    value: "0.01"
                                }
                            }
                        ]
                    }
                ]
            }),
            advanced: {
                commit: "true"
            },
            style: {
                label: "paypal",
                layout: "vertical"
            },
            onApprove: (data, actions) => {
                console.log("onApprove - transaction was approved, but not authorized", data, actions);
                actions.order.get().then(details => {
                    console.log("onApprove - you can get full order details inside onApprove: ", details);
                });
            },
            onClientAuthorization: (data) => {
                console.log("onClientAuthorization - you should probably inform your server about completed transaction at this point", data);
            },
            onCancel: (data, actions) => {
                console.log("OnCancel", data, actions);
            },
            onError: (err) => {
                console.log("OnError", err);
            },
            onClick: (data, actions) => {
                console.log("onClick", data, actions);
            }
        };
    }
    pase() {
        if (this.reserva.num_pases > 1) {
            return 'pases';
        }
        else {
            return 'pase';
        }
    }
    guardarReserva() {
        this.reserva.usuario = this.loginService.userData.username;
        this.reserva.cod_instalacion = this.instalacion.cod_instalacion;
        this.servicio.saveReserva(this.reserva)
            .subscribe(res => {
            console.log(res);
            console.log('Reserva Efectuda');
        }, err => console.error(err));
    }
};
ConfirmacionComponent = __decorate([
    core_1.Component({
        selector: 'app-confirmacion',
        templateUrl: './confirmacion.component.html',
        styleUrls: ['./confirmacion.component.scss']
    })
], ConfirmacionComponent);
exports.ConfirmacionComponent = ConfirmacionComponent;
