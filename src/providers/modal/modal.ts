import { HttpClient } from '@angular/common/http';
import { Injectable , Component} from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { AppState } from '../../app/app.global';

/*
  Generated class for the ModalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalProvider {

  constructor(public http: HttpClient,public modalCtrl: ModalController) {
    console.log('Hello ModalProvider Provider');
  }

  presentThemeModal() {
    let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }

}

@Component({
  template : ' <ion-header> <ion-toolbar> <ion-title>Change Theme</ion-title> </ion-toolbar></ion-header><ion-content><ion-list> <button ion-item *ngFor="let p of themes" (click)="changeTheme(p.theme)">  <ion-avatar  item-start>   <img [src]="p.color"/> </ion-avatar> {{p.title}} </button></ion-list></ion-content><ion-nav [root]="rootPage" [rootParams]="rootParams"></ion-nav>'
}
)
export class Profile {
  themes: Array<{title: string, theme: string,color: string}>;

 constructor(public viewCtrl: ViewController,public global:AppState) {
  // used for an example of ngFor and navigation
 this.themes = [
  { title: 'Default Red', theme: 'theme-red', color:'assets/imgs/FF0000.png' },
  { title: 'Noir', theme: 'theme-noir', color:'assets/imgs/333333.png' },
  { title: 'Clover', theme: 'theme-clover', color:'assets/imgs/388E3C.png' },
  { title: 'Blueberry', theme: 'theme-blueberry', color:'assets/imgs/1e88e5.png' }
];
 }

 dismiss() {
   let data = { 'foo': 'bar' };
   
 }

 


changeTheme(theme:any){
console.log("Now Changing theme to "+ theme);
this.global.set('theme', theme);
this.viewCtrl.dismiss(theme);
}
}
