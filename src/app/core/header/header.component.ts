import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/signin/store/auth.reducer';



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

}
