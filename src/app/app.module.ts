import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DiskPage } from '../pages/disk/disk';
import { NewdiskformPage } from '../pages/newdiskform/newdiskform'
import { DiskstoreProvider } from '../providers/diskstore/diskstore';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DiskPage,
    NewdiskformPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DiskPage,
    NewdiskformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DiskstoreProvider
  ]
})
export class AppModule {}
