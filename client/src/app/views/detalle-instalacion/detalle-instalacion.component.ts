import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Instalacion } from 'src/app/models/Instalacion';
import { InstalacionesService } from 'src/app/services/instalaciones.service';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { Horario } from 'src/app/models/horario';
import { HorarioService } from 'src/app/services/horario.service';
import { NotifierService } from 'angular-notifier';
import {FormsModule} from "@angular/forms";
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { Comunidad } from 'src/app/models/Comunidad';
import { LoginService } from 'src/app/services/login.service'
import { LikesService } from 'src/app/services/likes.service'
import { Like } from 'src/app/models/Like'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Auth } from 'aws-amplify'
import { AfterViewChecked } from '@angular/core';
@Component({
  selector: 'app-detalle-instalacion',
  templateUrl: './detalle-instalacion.component.html',
  styleUrls: ['./detalle-instalacion.component.scss']
})




export class DetalleInstalacionComponent implements OnInit, AfterViewChecked {

  reserva!: Reserva;

  likes: any = [];

  userName: any;
  instalacion: any = {
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
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoHeight: false,
    autoplayTimeout:5000,
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
  }

  selected: string = "";

  pases: number = 1;

  guarda: boolean = false;

  horario: any = [];

  reservas: any = [];

  comunidad: Comunidad = {
    cod_comunidad: 0,
    nombre: "",
    ubicacion: "",
    mapa: ""
  };

  like: Like = {
    id: 0,
    cod_instalacion: 0,
    username: "",
    created_at: new Date()
  }

  fecha!: any;
  muestra: boolean = false;
  hoy: Date = new Date();
  aforo: boolean = true;

  private readonly notifier: NotifierService;

  user = JSON.parse(localStorage.getItem("usuario") || '{}' )    ;

  constructor(private instalacionesService: InstalacionesService,
    private horarioService:HorarioService,
    private comunidadService:ComunidadService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    notifierService: NotifierService,
    private serviceReserva: ReservaService,
    private loginService: LoginService,
    private likeService: LikesService) {
    this.notifier = notifierService;
  }


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.cod_instalacion){
      this.instalacionesService.getInstalacion(params.cod_instalacion)
      .subscribe(
        res => {
          console.log(res);
          this.instalacion = res;
          //this.edit = true;
        },
          err => console.error(err)
          );


          this.horarioService.getHorario(params.cod_instalacion).subscribe(
            res => {
              this.horario = res;
              console.log(res);
            },
            err => console.log(err)
          );

          this.comunidadService.getComunidad(params.cod_instalacion).subscribe(
            res => {
              this.comunidad = res;
              console.log(res);
            },
            err => console.log(err)
          );

          this.likeService.getLikes().subscribe(
            res => {
              this.likes = res;
            },
            err => console.log(err)
          );



          console.log(this.guarda);
          console.log(this.likes);

          this.getReservas();

    }




    this.reserva = {
      turno: "",
      cod_instalacion: 0,
      cod_reserva: 0,
      usuario: "",
      total: 0,
      num_pases: 0,
      fecha: new Date(0),
      img: "",
      nombre: ""

    }






  }

  ngAfterViewChecked(): void {
    this.likes.forEach((like: { username: string | undefined; cod_instalacion: number | undefined; }) => {
      if(like.username == this.user && like.cod_instalacion == this.instalacion.cod_instalacion)
         this.guarda = true;
    });

  }







  guardarReserva(){
    this.reserva = {
      turno: this.selected.toString(),
      cod_instalacion: this.instalacion.cod_instalacion,
      cod_reserva: 0,
      usuario: this.user,
      total: 0,
      num_pases: this.pases,
      fecha: this.fecha,
      img: this.instalacion.img,
      nombre: this.instalacion.nombre
    }
    console.log(this.reserva);

    this.serviceReserva.setReserva(this.reserva);

    if(this.fecha!=null && this.selected!= null && this.pases != null && this.aforo == true)

      this.router.navigate(['confirmacion', this.instalacion.cod_instalacion]);
      else{
        this.notifier.show({
          type: 'error',
          message: 'Compruba que has rellenado todos los campos!',
          id: 'THAT_NOTIFICATION_ID', // Again, this is optional
        });
      }
  }





  guardaLike(){
    this.guarda = true;
    this.like.username = this.user;
    this.like.cod_instalacion = this.instalacion.cod_instalacion;
    delete this.like.created_at;
    this.likeService.saveLike(this.like)
    .subscribe(
      res => {
        console.log(res);


      },

      err => console.error(err)
    );
  }

  borraLike(){
    this.guarda = false;


    this.likeService.deleteLike(this.instalacion.cod_instalacion).subscribe(
      res => {
        console.log(res);
      },

      err => console.error(err)
    );
  }

  getReservas(){
    this.serviceReserva.getReservas().subscribe(
      res => {
        this.reservas = res;
      },
      err => console.log(err)
    );
    console.log(this.reservas);

  }

  controlaAforo(){
    let cont: number = 0;
    for (let reserva of this.reservas){
      if(reserva.fecha == this.reserva.fecha && reserva.turno ==  this.reserva.turno){
        cont += reserva.num_pases;
      }
    }
    if(cont >= this.instalacion.aforo){
      this.aforo = false;
    }
    else{
      this.aforo  = true;
    }
  }







}








