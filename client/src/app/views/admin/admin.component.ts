import { Component, OnInit } from '@angular/core';
import { InstalacionesService } from 'src/app/services/instalaciones.service'
import { ReservaService } from 'src/app/services/reserva.service'
import { Auth } from 'aws-amplify'
import { Instalacion } from 'src/app/models/Instalacion';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  instalaciones: any;
  imagen: "" | undefined;
  reservas: any;
  reserva: Boolean =false;
  instalacion: any;
  reser: any;
  constructor(private instalacionService: InstalacionesService,
    private reservaService: ReservaService,) { }

  ngOnInit(): void {
    this.getInstalaciones();
    this.getReservas();

  }

  getInstalaciones(){
    this.instalacionService.getInstalaciones().subscribe(
      res => {
        this.instalaciones = res;
        console.log(Auth.currentUserInfo);
      },
      err => console.log(err)
    );
  }

  getReservas(){
    this.reservaService.getReservas().subscribe(
      res => {
        this.reservas = res;
      },
      err => console.log(err)
    );

  }







  deleteInstalacion(id: string){
    this.instalacionService.deleteInstalacion(id).subscribe(
      res => {
        console.log(res);
        this.getInstalaciones();
      },

      err => console.error(err)
    );
  }

}



