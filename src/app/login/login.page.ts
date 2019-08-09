import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor( public navCtrl: NavController,
    private storage: Storage){}
   

  ngOnInit() {
  }
login (){
  console.log(this.email,this.password);
  this.storage.set('password',this.password);
  this.navCtrl.navigateBack('home');
}
}
