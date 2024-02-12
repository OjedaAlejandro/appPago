import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { OkComponent } from './components/ok/ok.component';
export const routes: Routes = [
    {path:'',component:ProductComponent},
    {path:'producto',component:ProductComponent},
    {path:'home',component:HomeComponent},
    {path:'ok',component:OkComponent}
];
