import { Component, ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { FormFieldTypes } from '@aws-amplify/ui-components';
//import Amplify, { Auth } from 'aws-amplify'
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {

  title = 'proyecto';
  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;
  formFields: FormFieldTypes | undefined;
  active = true;

  constructor(private ref: ChangeDetectorRef,
    private loginService: LoginService) {

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
        },
        {
          type: "phone_number",
          label: "Custom Phone Label",
          placeholder: "custom Phone placeholder",
          required: false,
        }
    ];


  }


  ngOnInit() {




    /*$.scrollify({
      section: '.container-fluid',
      sectionName: 'section-name',
      easing: 'easeOutExpo',
      scrollSpeed: 1000,
      offset: 0,
      scrollbars: false,
      standardScrollElements: '',
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll: true,
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });*/



  }


  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}

