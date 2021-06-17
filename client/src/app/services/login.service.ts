import { Injectable } from '@angular/core';
import { SignUpParams, UsernamePasswordOpts } from '@aws-amplify/auth/lib-esm/types';
import Amplify, {Auth} from 'aws-amplify'
import { CognitoUserInterface, AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject} from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';

export interface NewUser {
  email: string,
  phone: string,
  password: string,
  firstName: string,
  lastName: string
};


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn: boolean | undefined;
  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();


  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  userData!: CognitoUserInterface;

  constructor(
    private router: Router
  ) {
    Hub.listen('auth',(data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });
  }


  signUp(user: NewUser): Promise<CognitoUser|any> {
    return Auth.signUp({
      "username": user.email,
      "password": user.password,
      "attributes": {
        "email": user.email,
        "given_name": user.firstName,
        "family_name": user.lastName,
        "phone_number": user.phone
      }
    });
  }

  signIn(username: string, password: string):Promise<CognitoUser|any> {
    return new Promise((resolve,reject) => {
      Auth.signIn(username,password)
      .then((user: CognitoUser|any) => {
        this.loggedIn = true;
        resolve(user);
      }).catch((error: any) => reject(error));
    });
  }


    /** signout */
    signOut(): Promise<any> {
      return Auth.signOut()
        .then(() => {
          this.loggedIn = false;
          localStorage.removeItem("usuario");
          localStorage.removeItem("name");

        })
    }




socialSignIn(provider:CognitoHostedUIIdentityProvider): Promise<ICredentials> {
  return Auth.federatedSignIn({
    'provider': provider
  });
}

isLogin(){
  Auth.currentAuthenticatedUser().then(() => { return true; }).catch(() => {

    return false;
  });
}

getUserData() {
  if (!this.userData) {
    return Auth.currentAuthenticatedUser()
          .then(user => {
            this.userData = JSON.parse(localStorage[user.userDataKey]);
            this.userData.grupo = user.signInUserSession.idToken.payload['cognito:groups'];
            return this.userData;
          })
          .catch(err => {console.log('ERROR', err); return {}; });
  } else {
    return this.userData;
  }
}


}




/***
 * ngOnInit() {
    this._amplify.authStateChange$.subscribe(
      data => {
        if (data.state === 'signedIn') {
          this.name = data.user.attributes.name;
        }
        this.user = data.user;
  });
  // this._amplify.
  }

  cierraSesion(){
    this._amplify.auth().signOut().then( () => {
      this._router.navigate(['/']);
    });
  }
 */

