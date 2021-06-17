import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { networkInterfaces } from 'node:os';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { ChangeDetectorRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import {Router} from '@angular/router';
import { NgZone } from '@angular/core';
import { Auth } from 'aws-amplify'
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-cabecer',
  templateUrl: './cabecer.component.html',
  styleUrls: ['./cabecer.component.scss']
})
export class CabecerComponent implements OnInit {


  user!: any;
  authState: any;
  login: boolean = false;
  notifier;
  username!: any;

  constructor(private ref: ChangeDetectorRef,
    public loginservice: LoginService,
    private router:Router,
    private zone: NgZone,
    notifierService: NotifierService
    ) {
      this.notifier = notifierService;
     }


  ngOnInit(): void {
    this.loginservice.getUserData();
    this.user = JSON.parse(localStorage.getItem("name") || '{}' )    ;
    this.username = JSON.parse(localStorage.getItem("usuario") || '{}' )    ;


    Auth.currentAuthenticatedUser().then(() => { return this.login=true; })
        .catch(() => {

          return this.login=false;
        });


  }


  notificacion(){

    if(!this.login){
      this.notifier.show({
        type: 'error',
        message: 'Para poder acceder a las instalaciones debes esta logueado!',
        id: 'THAT_NOTIFICATION_ID', // Again, this is optional
      });
    }

  }

  logout(){
    this.loginservice.signOut();
    console.log(this.loginservice.getUserData());
    this.login = false;
    this.zone.run(() => {
      this.router.navigate(['/']);
  });

  }







}
