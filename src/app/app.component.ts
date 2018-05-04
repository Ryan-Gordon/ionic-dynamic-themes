import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AppState} from '../app/app.global';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  themes: Array<{title: string, theme: string,color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
              public splashScreen: SplashScreen, public global:AppState) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.themes = [
      { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
      { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
      { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeTheme(theme:any){
    console.log("Now Changing theme to "+ theme);
    this.global.set('theme', theme);
  }
}
