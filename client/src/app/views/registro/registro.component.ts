import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formFieldsSingUp:FormFieldTypes;
  public signupForm!: FormGroup;
  public confirmationForm!: FormGroup;
  public successfullySignup!: boolean;

  user!: CognitoUserInterface;
  email!: String;
  password!: String;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: LoginService
  ) {
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
    //this.initForm();

  }


}
