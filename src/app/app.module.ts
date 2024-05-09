import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {ButtonComponent} from "./components/button/button.component";
import {LogoComponent} from "./components/logo/logo.component";
import {NgOptimizedImage} from "@angular/common";
import { ToastrModule } from 'ngx-toastr';

import {AngularFireModule} from "@angular/fire/compat";
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, LogoComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgOptimizedImage,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent
  ]
})
export class AppModule {}
