import * as AuthenticationActions from './auth.actions'

export interface State{
    token:string;
    authenticated:boolean
}
const initialState={
    token:null,
    authenticated:false
};

export function authenticationReducer(
    state=initialState,
    action:AuthenticationActions.AuthenticationActions)
{
    switch (action.type){
     case AuthenticationActions.SIGN_UP:
     case AuthenticationActions.SIGN_IN:
      return {
          ...state,
          authenticated:true
      };
     case AuthenticationActions.LOG_OUT:
      return {
          ...state,
          authenticated:false,
          token:null
      };
     case AuthenticationActions.SET_TOKEN:
      return {
          ...state,
          token:action.payload
      };
     default:
     return state;
    }
}