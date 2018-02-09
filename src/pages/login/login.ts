import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { RegisterPage} from '../register/register';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname:string;
  upwd:string;
  tabSearch:any;
  constructor(
    public toastCtrl:ToastController,
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
      this.tabSearch=SearchPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/login.php?uname='
    +this.uname+'&upwd='+this.upwd)
    .subscribe((result)=>{
      let msg:any;
      if(result.code!=1){
        msg=result.msg;
      }else{
        msg=result.msg;
        this.navCtrl.pop();
      }
      this.toastCtrl.create({
        message:msg,
        duration:2000
      })
    })
  }
  //跳转注册页面
  toRegister(){
    this.navCtrl.push(RegisterPage);
  }
  //头部返回点击事件
  back(){
    this.navCtrl.pop();
  }
}
