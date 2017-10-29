import {Effect, Actions} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {fromPromise} from 'rxjs/observable/fromPromise';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';

@Injectable()

export class AuthEffects {

  @Effect()
  authSignup = this.actions$
      .ofType(AuthActions.TRY_SIGNUP)
      .map((action: AuthActions.TrySignup)=>{
        return action.payload;
      })
      .switchMap((authData:{username:string, password:string}) => {
        return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username,authData.password));
      })
      .switchMap( ()=> {
        return fromPromise(firebase.auth().currentUser.getIdToken())
      })
      .mergeMap((token: string) => {
        return [
          {
            type: AuthActions.SIGN_UP
          },
          {
            type: AuthActions.SET_TOKEN,
            payload:token
          }
        ]
      });

  @Effect()
  authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN)
      .map((action: AuthActions.TrySignin)=>{
         return action.payload;
        })
      .switchMap((authData:{username:string, password:string}) => {
         return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
      .switchMap( ()=> {
         return fromPromise(firebase.auth().currentUser.getIdToken())
        })
      .mergeMap((token: string) => {
         this.router.navigate(['/']);
         return [
                {
                  type: AuthActions.SIGN_IN
                },
                {
                  type: AuthActions.SET_TOKEN,
                  payload:token
                }
            ]
        });

  @Effect({dispatch:false})
  authSignout = this.actions$
      .ofType(AuthActions.TRY_SIGNOUT)
      .do(()=>{
        this.router.navigate(['/']);
      });

  constructor(private actions$: Actions,private router:Router){}
}