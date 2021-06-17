import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AmplifyFormField } from '@aws-amplify/ui-angular';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Auth} from 'aws-amplify'
import { FormFieldTypes } from '@aws-amplify/ui-components';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/services/login.service'
import { NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formFields: FormFieldTypes;
  formFieldsSingUp:FormFieldTypes;
  authState!: AuthState;
  user!: CognitoUserInterface;
  constructor(private ref: ChangeDetectorRef,
    private router:Router,
    public loginService: LoginService,
    private zone: NgZone) {

    this.formFields = [
      {
        type: "email",
        label: "Email",
        placeholder: "Introduce tu email",
        required: true,
      },
      {
        type: "password",
        label: "Contraseña",
        placeholder: "Introduce tu contraseña",
        required: true,
      }
  ];

  this.formFieldsSingUp = [
    {
      type: "email",
      label: "Email",
      placeholder: "Introduce tu email",
      required: true,
    },
    {
      type: "name",
      label: "Nombre y apellidos",
      placeholder: "Introduce tu nombre y apellidos",
      required: true,
    },

    {
      type: "phone_number",
      label: "Número de teléfono",
      placeholder: "Introduce tu número de teléfono",
      required: false,
    },

    {
      type: "password",
      label: "Contraseña",
      placeholder: "Introduce tu contraseña",
      required: true,
    },

];


}

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      console.log(this.user);
      localStorage.setItem("usuario", JSON.stringify(this.user.username));
      localStorage.setItem("name", JSON.stringify(this.user.attributes.name));
      this.loginService.getUserData();
      this.ref.detectChanges();
      this.zone.runOutsideAngular(() => {
        location.reload();
    });
      this.zone.run(() => {
        this.router.navigate(['/instalaciones']);

    });






    });




  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }


}
