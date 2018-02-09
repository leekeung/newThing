import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage} from '../cart/cart';
import { IndexPage} from '../index/index';
import {LoginPage} from '../login/login';
import { ProductsPage} from '../products/products';
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
  tabIndex:any;
  tabCart:any;
  tabProducts:any;
  tabSearch:any;
  constructor(
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.tabCart=CartPage;
    this.tabIndex=IndexPage;
    this.tabProducts=ProductsPage;
    this.tabSearch=SearchPage;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserCenterPage');
  this.upDateAssets();
    
  }
  tabSerach(){
    this.navCtrl.push(this.tabSearch);
  }
  //图片上传
  // choosePicMenu=function(){
  //   var type='gallery';
  //   $ionicActionSheet.show({
      
  //   })
  // }
  initData(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/getCartProducts.php')
    .subscribe((result)=>{
      if(result.code==300){
        this.navCtrl.push(LoginPage);
      }else if(result.code==400){
        //失败
      }
    })
  }
  back(){
   this.navCtrl.pop();
  }
  //修改头像
  
  upDateAssets(){
    // let file=document.getElementById("file");
    // let formData=new FormData;
    // console.log(formData);
    // formData.insertBefore("mypic",file[0].files[0]);
    // console.log(file[0].files[0]);
    // file.addEventListener('onchange',function(){

    // })
    // this.myHttp
    // .sendRequest('http://localhost/KMN/WebApp/template/src/data/userUpload.php')
    // .subscribe((result:any)=>{
    //   console.log(result);
    // })
  }
}
