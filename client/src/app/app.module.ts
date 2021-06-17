import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import '../../node_modules/materialize-css';
import { NotifierModule } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { CabecerComponent } from './views/cabecer/cabecer.component';
import { CuerpoComponent } from './views/cuerpo/cuerpo.component';
import { FooterComponent } from './views/footer/footer.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ContrasenaComponent } from './views/contrasena/contrasena.component';
import { ActivacionComponent } from './views/activacion/activacion.component';
import { RecuperaCodigoComponent } from './views/recupera-codigo/recupera-codigo.component';
import { BodyComponent } from './views/body/body.component';


import { InstalacionesService } from './services/instalaciones.service';

/* Add Amplify imports */
/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import { InstalacionesListComponent } from './views/instalaciones-list/instalaciones-list.component';
import { DetalleInstalacionComponent } from './views/detalle-instalacion/detalle-instalacion.component';
import { NfComponent } from './views/nf/nf.component';
import { AreaPersonalComponent } from './views/area-personal/area-personal.component';
import { ConfirmacionComponent } from './views/confirmacion/confirmacion.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminComponent } from './views/admin/admin.component';
import { InstalacionesFormComponent } from './views/instalaciones-form/instalaciones-form.component';
import awsmobile from '../aws-exports'
import { Storage } from 'aws-amplify';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}



/* Configure Amplify resources */
Amplify.configure(awsmobile);
Amplify.configure({
  Storage: {
    AWSS3: {
        bucket: 'sobway180343-dev', //REQUIRED -  Amazon S3 bucket name
        region: 'eu-west-2', //OPTIONAL -  Amazon service region
    }
}
});

@NgModule({
  declarations: [
    AppComponent,
    CabecerComponent,
    CuerpoComponent,
    FooterComponent,
    ServiciosComponent,
    NosotrosComponent,
    ClientesComponent,
    LoginComponent,
    RegistroComponent,
    ContrasenaComponent,
    ActivacionComponent,
    RecuperaCodigoComponent,
    BodyComponent,
    InstalacionesListComponent,
    DetalleInstalacionComponent,
    NfComponent,
    AreaPersonalComponent,
    ConfirmacionComponent,
    SafePipe,
    AdminComponent,
    InstalacionesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyUIAngularModule,
    FormsModule,
    NotifierModule,
    NgxPayPalModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    InstalacionesService
  ],
  bootstrap: [AppComponent,
    InstalacionesListComponent]
})
export class AppModule { }
