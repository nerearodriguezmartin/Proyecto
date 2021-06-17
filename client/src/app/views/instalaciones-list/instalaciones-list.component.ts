import { Component, OnInit } from '@angular/core';
import { Instalacion } from 'src/app/models/Instalacion';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { InstalacionesService } from '../../services/instalaciones.service'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LocationService } from 'src/app/services/location.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instalaciones-list',
  templateUrl: './instalaciones-list.component.html',
  styleUrls: ['./instalaciones-list.component.scss'],

})
export class InstalacionesListComponent implements OnInit {
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
  instalaciones: any = [];
  instalacionesL: any = [];
  instalacionesFiltro: any = [];
  tipos: any = [];
  tipo:String= "";
  latitude: any;
  longitude: any;
  cuidad: String = "";


  constructor(private instalacionService: InstalacionesService,
   private locationService: LocationService,
   private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getInstalaciones();
    this.getTipos();
    this.getLocation();
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });
}


  getInstalaciones(){
    this.instalacionService.getInstalaciones().subscribe(
      res => {
        this.instalaciones = res;
        this.instalacionesL = res;
      },
      err => console.log(err)
    );
  }

  getTipos(){
    this.instalacionService.getTipos().subscribe(
      res => {
        this.tipos = res;
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

  filtra(tipo: any){
    this.instalacionesFiltro = [];
    this.instalacionesL.forEach((instalacion: { tipo_instalacion: String; }) => {
      if (instalacion.tipo_instalacion == tipo){
        this.instalacionesFiltro.push(instalacion);
      }
      this.instalaciones = this.instalacionesFiltro;

    });
  }



 /*processLocation() {
    var location = new google.maps.LatLng(this.latitude, this.longitude);
    if (location) {
      for (var i = 0; i < location.length; i++) {
        if (location[i].types[0] === "locality") {
          let city = location[i].address_components[0].short_name;
          let state = location[i].address_components[2].short_name;
          let country = location[i].address_components[3].long_name;

          console.log(city, state, country);
        }
      }

      console.log(location);
    }*/





}
