import { RouterModule, Routes } from '@angular/router';
import { BucketComponent } from './pages/bucket/bucket.component';
import { NgModule } from '@angular/core';
import { ShopComponent } from './pages/shop/shop.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
      // {path: '**', component: NotFoundComponent},
      { path: '',  component: ShopComponent },
      { path: 'bucket', component: BucketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRouterModule {

}
