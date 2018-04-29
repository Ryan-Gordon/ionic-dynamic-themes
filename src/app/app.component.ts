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

  pages: Array<{title: string, theme: string,color: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
              public splashScreen: SplashScreen, public global:AppState) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Default Red Theme', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir Theme', theme: 'theme-noir', color:'assets/imgs/333333.png' }
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

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  changeTheme(theme:any){
    console.log("Now Changing theme to "+ theme);
    this.global.set('theme', theme);
  }
}
