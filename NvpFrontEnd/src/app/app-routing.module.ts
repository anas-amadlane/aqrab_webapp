import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/RegisterComponent";
import {CustomerGrid} from "./Seller/CustomerGrid";
import {HomeComponent} from "./home/home.component";
import {SellerHomeComponent} from "./home/sellerHome.component";
import {UserProfileComponent} from "./login/profil/UserProfileComponent";
import {TransactionsComponent} from "./transactions/transactions.component";
import {CustomersListComponent} from "./customer/customersList.component";
import {AdminComponent} from "./admin/AdminComponent";
import {SellerActionsComponent} from "./SellerAction/sellerActions.component";


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  } ,{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'sellerHome',
    component: SellerHomeComponent
  },{
    path: 'listCustomer',
    component: CustomerGrid
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profilUser',
    component: UserProfileComponent
  },{
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'customersList',
    component: CustomersListComponent
  },{
    path: 'sellerActions',
    component: SellerActionsComponent
  },{
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
