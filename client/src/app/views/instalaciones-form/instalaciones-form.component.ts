import { Component, OnInit } from '@angular/core';
import { Instalacion } from 'src/app/models/Instalacion'
import { ActivatedRoute, Router } from '@angular/router'
import { InstalacionesService } from '../../services/instalaciones.service'
//import {AWS} from 'aws'
import {Storage} from 'aws-amplify'
import {storage} from './../../db'

@Component({
  selector: 'app-instalaciones-form',
  templateUrl: './instalaciones-form.component.html',
  styleUrls: ['./instalaciones-form.component.scss']
})
export class InstalacionesFormComponent implements OnInit {

  instalacion: any = {
    cod_instalacion: 0,
    cod_comunidad: 0,
    hora_apertura: '',
    hora_cierre: '',
    aforo: 0,
    tipo_instalacion: '',
    nombre: '',
    precio: 0,
    persona_ajeno: true,
    limpieza: 0,
    comunicacion: 0,
    ubicacion: 0,
    calidad: 0,
    img: '',
    img2: '',
    img3: '',
    descripcion: '',
    maximo: 5

  };


  edit: boolean = false;

  imageData: any;

  uploadValue: any;

  img1: any;

  constructor(private instalacionesService:InstalacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.instalacionesService.getInstalacion(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.instalacion = res;
          this.edit = true;
        },

        err => console.error(err)
      )
    }


  }

  saveNewInstalacion(){

    this.instalacionesService.saveInstalacion(this.instalacion)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin']);
      },

      err => console.error(err)
    );
  }

  updateInstalacion(){
    this.instalacionesService.updateInstalacion(this.instalacion.cod_instalacion, this.instalacion)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin']);
      },
      err => console.error(err)
    )
  }

 /*  async onChange(event: any) {
   /* const file = event.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: 'image/jpeg' // contentType is optional
      });
    } catch (error) {
      console.log('Error uploading file: ', error);
    }*/

   /* previewImage(event:any){
      this.uploadValue=0;
      this.imageData = event.target.files[0];
      var reader = new FileReader();

      reader.onload = (e:any) => {
         this.img1 = e.target.result;
      }
      reader.readAsDataURL(this.imageData);

    }

    subir(){
      const storageRef=storage.ref(this.imageData.name).put(this.imageData);

      storageRef.on(`state_changed`,snapshot=>{
      this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log(this.uploadValue)
        }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
              this.instalacion.img = url;
              this.img1=null;
              this.imageData = null;

          }
        );
    })
  }*/







}
