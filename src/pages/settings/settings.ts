import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//App State class can be accessed from within  a page too 

import {AppState} from '../../app/app.global';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  pages: Array<{title: string, theme: string,color: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private global:AppState) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Default Red Theme', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir Theme', theme: 'theme-noir', color:'assets/imgs/333333.png' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }



  changeTheme(theme:any){
    console.log("Now Changing theme to "+ theme);
    this.global.set('theme', theme);
  }

}
