import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BucketComponent } from './pages/bucket/bucket.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AppRouterModule } from './approuter.module';
import { SharedService } from '../services/SharedService';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BucketComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
