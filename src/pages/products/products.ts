import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService} from '../../app/utility/service/myhttp.service';
import {DetailPage} from '../detail/detail';
import { CartPage} from '../cart/cart';
import { UserCenterPage} from '../user-center/user-center';
import { IndexPage} from '../index/index';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  tabCart:any;
  tabIndex:any;
  products:Array<any>=[];
  detailPage:any;
  tabUserCenter:any;
  isList:boolean=false;
  isPriceSort:boolean=false;
  isPriceUp:boolean=false;
  priceList:Array<any>=[];
  tabSearch:any;
  constructor(
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
      this.tabCart=CartPage;
      this.tabIndex=IndexPage;
      this.tabUserCenter=UserCenterPage;
       this.detailPage=DetailPage;
       this.tabSearch=SearchPage;
}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductsPage');
     this.initData();
  }
  initData(){
    this.myHttp
    .sendRequest('http://localhost/KMN/WebApp/template/src/data/getAll.php')
    .subscribe((result)=>{
      // console.log(result);
      this.products=result;
    })
  }
  back(){
    this.navCtrl.pop();
  }
  //每行一个商品样式
  setListStyle(){
    let styles={
      'flex':this.isList?'0 0 100%':'',
      'width':this.isList?'100%':'',
      'max-width':this.isList?'100%':'',
    }
    return styles;
  }
  setImgStyle(){
    let styles={
      'float':this.isList?'left':'',
      'width':this.isList?'30%':'',
    }
    return styles;
  }
  setPStyle(){
    let styles={
      'display':this.isList?'inline-block':'',
        'margin-top':this.isList?'30px':'',
        'width':this.isList?'70%':''
      }
      return styles;
  }
  changeList(){
    if(!this.isList){
    this.isList=true;
    }
    else{
    this.isList=false;
    }
  }
  //按价格排序
  //重复代码调用函数
  repeat(List){
      let pros=[],index=[];
      for(let p=0;List.length>p;p++){
        for(let n=0;this.products.length>n;n++){
          if(parseFloat(this.products[n].price)==List[p]){
            if(index.indexOf(this.products[n].pid)<0){
              index.push(this.products[n].pid);
              this.priceList.push(this.products[n]);
              break;
            }
          }
        }
      }
  }
  Onprice(){
    this.priceList=[];
    //升序
    if(this.isPriceUp){
      let list=[];
      for(let i of this.products){
        list.push(parseFloat(i.price));
      }
      list=list.sort((a,b)=>a-b);
      this.repeat(list);
      this.isPriceSort=true;
      this.isPriceUp=false;
    }else{
      //降序
      let list=[];
      for(let i of this.products){
        list.push(parseFloat(i.price));
      }
      list=list.sort((a,b)=>-a+b);
      this.repeat(list);
      this.isPriceSort=true;
      this.isPriceUp=true;
    }
  }
}
