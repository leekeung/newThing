import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service';
import { LogService } from '../../app/utility/service/log.service';
import { DetailPage} from '../detail/detail';
import { ProductsPage } from '../products/products'; 
import { CartPage } from '../cart/cart';
import { UserCenterPage} from '../user-center/user-center';
import { SearchPage} from '../search/search';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  tabIndex:any;
  tabCart:any;
  tabUserCenter:any;
  tabProducts:any;
  slider:Array<any>=[];
  f_1:Array<any>=[];
  f_2:Array<any>=[];
  f_3:Array<any>=[];
  detailPage:any;
  tabSearch:any;
    constructor(
    public myLog:LogService,
    public myHttp:MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
    this.detailPage=DetailPage;
    this.tabIndex=IndexPage;
    this.tabProducts=ProductsPage;
    this.tabCart = CartPage;
    this.tabUserCenter =UserCenterPage;
    this.tabSearch=SearchPage;
  }
  ionViewDidLoad() {
   // this.myLog.showLog('ionViewDidLoad IndexPage');
    this.initData();
  }
  //初始化视图
  initData(){
    this.myHttp
      .sendRequest("http://localhost/daphne/src/data/index.php")
      .subscribe((result:any)=>{
        // this.myLog.showLog(result);
        this.slider=result.sliders;
        this.f_1=result.f_1;
        this.f_2=result.f_2;
        this.f_3=result.f_3;
      })
  }
  // 页面滚动 改变搜索框样式事件
 ContentController($scope,$ionicSideMenDelegate){
  
     $scope.toggleLeft=function(){
      $ionicSideMenDelegate.toggleLeft();
      }
    }
}
