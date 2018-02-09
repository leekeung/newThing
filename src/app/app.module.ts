import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CartPage} from '../pages/cart/cart';
import { LoginPage} from '../pages/login/login';
import { UserCenterPage} from '../pages/user-center/user-center';
import { NotFoundPage} from '../pages/not-found/not-found';
import { IndexPage} from '../pages/index/index';
import { ProductsPage} from '../pages/products/products';
import { MyHttpService } from './utility/service/myhttp.service';
import { LogService } from './utility/service/log.service';
import { DetailPage} from '../pages/detail/detail';
import { RegisterPage} from '../pages/register/register';
import { SearchPage} from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
     NotFoundPage,
     IndexPage,
     UserCenterPage,
     LoginPage,
     CartPage,
     ProductsPage,
     DetailPage,
     RegisterPage,
      SearchPage,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
     NotFoundPage,
     IndexPage,
     UserCenterPage,
     LoginPage,
     CartPage,
     ProductsPage,
     DetailPage,
     RegisterPage,
      SearchPage,
  ],
  providers: [
    LogService,
    MyHttpService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
