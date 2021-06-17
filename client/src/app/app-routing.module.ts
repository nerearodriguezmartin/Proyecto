import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './views/clientes/clientes.component';
import { CuerpoComponent } from './views/cuerpo/cuerpo.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ServiciosComponent } from './views/servicios/servicios.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ContrasenaComponent } from './views/contrasena/contrasena.component';
import { ActivacionComponent } from './views/activacion/activacion.component';
import { RecuperaCodigoComponent } from './views/recupera-codigo/recupera-codigo.component';
import { BodyComponent } from './views/body/body.component';
import { InstalacionesListComponent } from './views/instalaciones-list/instalaciones-list.component';
import { DetalleInstalacionComponent } from './views/detalle-instalacion/detalle-instalacion.component';
import { NfComponent } from './views/nf/nf.component';
import { ConfirmacionComponent } from './views/confirmacion/confirmacion.component';
import { LoginGuard } from './guards/login.guard';
import { AreaPersonalComponent } from './views/area-personal/area-personal.component';
import { AdminComponent } from './views/admin/admin.component';
import { InstalacionesFormComponent } from './views/instalaciones-form/instalaciones-form.component';
import { UnauthGuard } from './guards/unauth.guard';


const routes: Routes = [
  { path: 'cuerpo', component: CuerpoComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'contacta', component: FooterComponent},
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard]},
  { path: 'registro', component: RegistroComponent},
  { path: 'contraseña', component: ContrasenaComponent},
  { path: 'activacion', component: ActivacionComponent},
  { path: 'recuperaCodigo', component: RecuperaCodigoComponent},
  { path: '', component: BodyComponent},
  { path: 'instalaciones', component: InstalacionesListComponent, canActivate: [LoginGuard] },
  { path: 'instalaciones/:cod_instalacion', component: DetalleInstalacionComponent, canActivate: [LoginGuard] },
  { path: 'confirmacion/:cod_instalacion', component: ConfirmacionComponent, canActivate: [LoginGuard]},
  { path: 'personal', component: AreaPersonalComponent, canActivate: [LoginGuard] },
  { path: 'instalacionesForm/:cod_instalacion', component: InstalacionesFormComponent, /*canActivate: [LoginGuard] */},
  { path: 'instalacionesForm', component: InstalacionesFormComponent, /*canActivate: [LoginGuard] */},
  { path: 'admin', component: AdminComponent, canActivate: [LoginGuard]},
  { path: '**', component: NfComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
