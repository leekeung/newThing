import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { LogService } from '../../app/utility/service/log.service';
import { NotFoundPage} from '../not-found/not-found';
import { CartPage} from '../cart/cart';
import { IndexPage} from '../index/index';
import {LoginPage} from '../login/login';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  // 定义三个变量,可以绑定到模板内容的navPush属性
  //实现跳转
  pageNotFound:any;pageLogin:any;
  pageCart:any;pageIndex:any;
  detailSelf:any;
  detailBro:any;
  pageHome:any;
  selfImg:Array<any>=[];
  detailPage:any;
  weight1:string;
  weight2:string;
  isShow:boolean=true;
  sum:number=1;
  contentStyle:Array<any>=[];
  upBox:Array<any>=[];
  cartLine:number;
  tabSearch:any;
  constructor(
    public myToastCtrl:ToastController,
    public myLog:LogService,
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
      this.detailPage=DetailPage;
      this.pageCart=CartPage;
      this.pageNotFound=NotFoundPage;
      this.pageLogin=LoginPage;
      this.pageIndex=IndexPage;
      this.tabSearch=SearchPage;
  }

  ionViewDidLoad() {
    this.myLog.showLog('ionViewDidLoad DetailPage');
    //接收 index传来的id
    let pid=this.navParams.get('id');
    //加载购物车内行数
    this.getCartLine();
    this.initDetail(pid);
  }
  tabSerach(){
    this.navCtrl.push(this.tabSearch);
  }
  initDetail(id:number){
    this.myHttp.sendRequest('http://localhost/KMN/WebApp/template/src/data/detail.php?pid='+id)
    .subscribe((result:any)=>{
      this.myLog.showLog(result);
    
      this.detailBro=result.bro;
      this.detailSelf=result.self[0];
      //判断fid选择重量
      if(this.detailSelf.fid==1){
        this.weight1='5斤'
        this.weight2='10斤'        
      }else if(this.detailSelf.fid==2){
         this.weight1="500g";
        this.weight2='1000g';
      }else if(this.detailSelf.fid==3){
        this.weight1="1kg";
        this.weight2='2kg';
      }
      
      // 获取所有图片保存到 selfImg
      if(this.detailSelf.img1!=""){
        this.selfImg.push(this.detailSelf.img1);
        if(this.detailSelf.img2!="")
          this.selfImg.push(this.detailSelf.img2);
          if(this.detailSelf.img3!="")
            this.selfImg.push(this.detailSelf.img3);
            if(this.detailSelf.img4!="")
              this.selfImg.push(this.detailSelf.img3);
      }
    })
  }
  //头部返回点击事件
  back(){
    this.navCtrl.pop();
    
  }
  //打开购物车
  showCart(){
    this.upBox=[{"transition":"all .1s linear","visibility":"visible"}];
    this.contentStyle=[{"bottom":0}];
  }
  //关闭购物车
  closeCrat(){
     this.contentStyle=[{"bottom":"-270px"}];
     this.upBox=[{"transition": "all .5s linear","visibility":"hidden"}];
  }
  //图文展示
  // showPicDetail(){
  //   this.upBox=[{"transition":"all .1s linear","visibility":"visible"}];
  // }
  //重量更换事件
  toggle1(){this.isShow=false;}
  toggle2(){ this.isShow=true;}
  //加减数量
  ctrl_l(){this.sum<=1?this.sum=1:this.sum--}
  ctrl_r(){this.sum++};
  
  //加入购物车事件
  addToCart(){
    if(this.isShow){
      this.weight2=this.weight2;
    }else{this.weight2=this.weight1;}
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/addToCart.php?pid='
    +this.detailSelf.pid+'&weight='+this.weight2+'&sum='+this.sum+'&uid=')
    .subscribe((result:any)=>{
       let showMsg:string;
      this.myLog.showLog(result);
      if(result.code==200){
        //成功
        showMsg=result.msg;
      }else if(result.code==300){
        //未登录
        this.navCtrl.push(LoginPage);
      }else if(result.code==500){
        //失败
        showMsg=result.msg;
      }
      this.myToastCtrl.create({
        message:showMsg,
        position:"bottom",
        duration:2000
      }).present();
    })
    
  }
  //获取购物车行数
  getCartLine(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/getCartLine.php')
    .subscribe((result:any)=>{
     // console.log(result);
      this.cartLine=result;
    })
  }
}
