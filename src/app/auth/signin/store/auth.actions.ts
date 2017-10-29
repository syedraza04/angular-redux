import {Action} from "@ngrx/store";

export const  TRY_SIGNUP = 'TRY_SIGNUP';
export const  TRY_SIGNIN = 'TRY_SIGNIN';
export const  TRY_SIGNOUT = 'TRY_SIGNOUT';
export const  SIGN_UP = 'SIGN_UP';
export const  SIGN_IN = 'SIGN_IN';
export const  LOG_OUT = 'LOG_OUT';
export const  SET_TOKEN = 'SET_TOKEN';

export class Signup     implements Action {
    readonly type=SIGN_UP;
}
export class TrySignup  implements Action {
    readonly type=TRY_SIGNUP;
    constructor (public payload: {username: string, password: string}){}
}
export class TrySignin  implements Action {
    readonly type=TRY_SIGNIN;
    constructor (public payload: {username: string, password: string}){}
}
export class TrySignout implements Action {
    readonly type=TRY_SIGNOUT;
}
export class Signin     implements Action {
    readonly type = SIGN_IN;
}
export class Logout     implements Action {
    readonly type=LOG_OUT;
    constructor(){}
}
export class Settoken   implements Action {
    readonly type=SET_TOKEN;
    constructor(public payload: string){}
}

export type AuthenticationActions =
    Signin   |
    Signup   |
    Logout   |
    Settoken |
    TrySignup|
    TrySignin|
    TrySignout