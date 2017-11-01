import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { AuthEffects } from "./auth/signin/store/auth.effects";
import { CoreModule } from './core/core.module';
import { reducers } from './store/app.reducers'
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import {AppBootstrapModule} from "./app-bootstrap.module";
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {PortfolioHeaderComponent} from "./core/portfolio-header/portfolio-header.component";
import {HomeComponent} from "./core/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from "./core/footer/footer.component";
import {LandingPageComponent} from "./core/landing-page/landing-page.component";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PortfolioHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,

    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
