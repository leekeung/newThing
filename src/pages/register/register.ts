import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import { LoginPage} from '../login/login';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  uname:string;
  upwd:string;
  qpwd:string;
  tabSearch:any;
  constructor(
    public myToast:ToastController,
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
      this.tabSearch=SearchPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/register.php?uname='+this.uname+'&upwd='+this.upwd+'&qpwd='+this.qpwd)
    .subscribe((result)=>{
      let showMsg:any;
      if(result.code!=1){
        showMsg=result.msg;
      }else{
        showMsg=result.msg;
        this.navCtrl.push(LoginPage);
      }
      let toast = this.myToast.create({
        message: showMsg,
        duration: 3000
      });
      toast.present();
    })
  }
  backLogin(){
    this.navCtrl.pop();
  }
}
