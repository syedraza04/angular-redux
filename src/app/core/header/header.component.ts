import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/signin/store/auth.reducer';
import * as AuthActions from '../../auth/signin/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipes.actions'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements  OnInit{
  authState:Observable<fromAuth.State>;

  constructor(private store:Store<fromApp.AppState>) {}

  ngOnInit(){
      this.authState =  this.store.select('auth');
  }

  onSaveData() {
      this.store.dispatch(new RecipeActions.Storerecipes());
  }

  onFetchData() {
      this.store.dispatch(new RecipeActions.Fetchrecipes());
  }

  onLogout() {
      this.store.dispatch(new AuthActions.TrySignout())
  }
}
