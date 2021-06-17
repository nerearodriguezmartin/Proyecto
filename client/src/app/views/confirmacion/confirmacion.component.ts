import { Component, OnInit, Input} from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
declare let paypal: any;
import { InstalacionesService } from 'src/app/services/instalaciones.service'
import { ActivatedRoute, Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  public payPalConfig: any;
  reserva!: Reserva;
  instalacion: any;
  user = JSON.parse(localStorage.getItem("usuario") || '{}' )    ;
  private readonly notifier: NotifierService;

  constructor(private servicio: ReservaService,
    private instalacionesService: InstalacionesService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router,
    notifierService: NotifierService,){
      this.notifier = notifierService;
    }

  ngOnInit(): void {
   /* this.servicio.reservaEmitter.subscribe(
      data => {
        this.reserva = data;
        console.log(this.reserva);
      }
    );
    console.log(this.reserva);*/

    this.reserva = this.servicio.obtenerReserva();


    const params = this.activatedRoute.snapshot.params;
    if(params.cod_instalacion){
      this.instalacionesService.getInstalacion(params.cod_instalacion)
      .subscribe(
        res => {
          this.instalacion = res;
          //this.edit = true;
        },
          err => console.error(err)
          );
      }


    this.payPalConfig = {
      currency: "EUR",
      clientId: "AZXY4K0dUBazE1OTSNMJdP2Zpmg9k0WbOUcWRwebrjR9RyJTWBS3ULUhQKFfnwOOa4oc9NilhV4iXlzD",
      createOrder: (data: any) => <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: this.reserva.num_pases*this.instalacion.precio+"€",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: this.reserva.num_pases*this.instalacion.precio+"€"
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
                    value: this.reserva.num_pases*this.instalacion.precio+"€"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data: any) => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data);
          this.reserva.pagado = true;

      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
  }



  pase(){
    if(this.reserva.num_pases > 1){
      return 'pases';
    }else{
      return 'pase';
    }
  }

  guardarReserva(){
    this.reserva.usuario = this.user;
    this.reserva.cod_instalacion = this.instalacion.cod_instalacion;
    this.reserva.total = this.instalacion.precio * this.reserva.num_pases;
    this.reserva.img = this.instalacion.img;
    this.reserva.nombre = this.instalacion.nombre;
    this.servicio.saveReserva(this.reserva)
    .subscribe(
      res => {
        console.log(res);
        console.log('Reserva Efectuda');

      },

      err => console.error(err)
    );




    this.router.navigate(['/instalaciones']);
    this.notifier.show({
      type: 'success',
      message: 'Muchas gracias por su reserva!',
      id: 'THAT_NOTIFICATION_ID', // Again, this is optional
    });



  }
}








