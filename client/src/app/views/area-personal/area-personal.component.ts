import { AfterContentInit, Component, OnInit } from '@angular/core';
import { LikesService } from 'src/app/services/likes.service'
import { LoginService } from 'src/app/services/login.service'
import { InstalacionesService} from 'src/app/services/instalaciones.service'
import { Auth } from 'aws-amplify'
import { ReservaService } from 'src/app/services/reserva.service';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
@Component({
  selector: 'app-area-personal',
  templateUrl: './area-personal.component.html',
  styleUrls: ['./area-personal.component.scss']
})
export class AreaPersonalComponent implements OnInit, AfterViewChecked {
  likes: any = [];
  instalaciones: any = [];
  userInstalaciones: any = [];
  userReserva: any = [];
  userLikes: any;
  userName: String = "";
  user = JSON.parse(localStorage.getItem("usuario") || '{}' )    ;
  reserva: boolean = false;
  reservas: any = [];
  constructor(private likeServices: LikesService,
    public loginService: LoginService,
    private instalacionesService: InstalacionesService,
    private reservasService: ReservaService ) { }

  ngOnInit(): void {

      this.getReservas();
      this.getLikes();

    this.instalacionesService.getInstalaciones().subscribe(
      res => {
        this.instalaciones = res;
      },
      err => console.log(err)
    );


  }

  ngAfterViewChecked(): void{
    this.carga();
    this.reservasUsuario();
  }


  carga(){

    this.userInstalaciones = [];
    for (let instalacion of this.instalaciones){
      for (let like of this.likes){
        if(like.cod_instalacion == instalacion.cod_instalacion && like.username == this.user){

          this.userInstalaciones.push(instalacion)
         }
      }
    }

  }

  reservasUsuario(){
    this.userReserva = [];
      for (let reserva of this.reservas){
        if(reserva.usuario == this.user){
          this.userReserva.push(reserva);
         }
      }

  }

  getLikes(){
    this.likeServices.getLikes().subscribe(
      res => {
        this.likes = res;
      },
      err => console.log(err)
    );

  }

  getReservas(){
    this.reservasService.getReservas().subscribe(
      res => {
        this.reservas = res;
      },
      err => console.log(err)
    );
}

deleteLike(id: string){
    this.likeServices.deleteLike(id).subscribe(
      res => {
        console.log(res);
        this.getLikes();
      },

      err => console.error(err)
    );
    this.carga();
  }
}




