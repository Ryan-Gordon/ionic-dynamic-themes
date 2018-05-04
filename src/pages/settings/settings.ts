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
    this.pages = [
      { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
      { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
      { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
      { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
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
