import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import { LoginPage} from '../login/login';
import { ProductsPage} from '../products/products';
import { UserCenterPage} from '../user-center/user-center';
import { IndexPage} from '../index/index';
import { SearchPage} from '../search/search';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  isNone:boolean=false;
  products:any;
  pro_sum:number;
  isChecked:boolean=false;
  total:number=0;
  tabProducts:any;
  tabIndex:any;
  tabSearch:any;
  tabUserCenter:any;
  constructor(
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
      this.tabProducts=ProductsPage;
      this.tabIndex=IndexPage;
      this.tabUserCenter=UserCenterPage;
      this.tabSearch=SearchPage;
  }
  tabSerach(){
    this.navCtrl.push(this.tabSearch);
  }
  ionViewDidLoad(){
    // console.log('ionViewDidLoad CartPage');
    this.initData();
  }
  initData(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/getCartProducts.php')
    .subscribe((result)=>{
      if(result.code==300){
        this.navCtrl.push(LoginPage);
      }else if(result.code==400){
        //失败
      }else{
      //  console.log(result);
        this.products=result;
      }
    })
  }
  //返回
  back(){
   this.navCtrl.pop();
  }
  //修改购物车产品数量
  // 参数 ： isMinus true就是减 反则加 
  //参数 ： index 第几个列表被点击
  modifyCartCount(isMinus:boolean,index:number){
    // 定义一个变量 保存当前sum
    let myCount =this.products[index].sum;
    if(isMinus){
      myCount--;
      if(myCount==0){
        return;
      }
    }else{
      myCount++;
    }
    this.products[index].sum=myCount;
  }
  //单选框事件
  checked(index:number){
    let mycheck =this.products[index].isChecked;
    if(mycheck==0){
      mycheck=1;
      this.total+=parseFloat(this.products[index].price)*this.products[index].sum;
    }else{
      mycheck=0;
      this.total-=parseFloat(this.products[index].price)*this.products[index].sum;
    }
    this.products[index].isChecked=mycheck;
  }
  //全选框
  Allchecked(){
    if(!this.isChecked){
      this.isChecked=true;
      for(let i in this.products){
        this.products[i].isChecked=1;
        this.total+=parseFloat(this.products[i].price)*this.products[i].sum;
      }
    }else{
      this.isChecked=false;
      for(let i in this.products){
        this.products[i].isChecked=0;
        this.total-=parseFloat(this.products[i].price)*this.products[i].sum;
      }
    }
    
  }
  //删除商品列
  delList(pid:number,weight:string){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/delCartList.php?pid='+pid+'&weight='+weight)
    .subscribe((result)=>{
      if(result.code==1){
        this.initData();
      }
    })
  }
}
