import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { TareasServicioProvider } from '../providers/tareas-servicio/tareas-servicio';

//librerías para http servicios
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//necesitas importar HttpModule, HttpClientModule en  "imports" para poder consumir los servicios  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage
  ],
  imports: [
  BrowserModule,
  HttpModule,
  HttpClientModule,
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TareasServicioProvider
  ]
})
export class AppModule {}
