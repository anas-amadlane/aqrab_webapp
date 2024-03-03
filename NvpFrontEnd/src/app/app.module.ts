import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/RegisterComponent";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AgGridModule} from "ag-grid-angular";
import {CustomerGrid} from "./Seller/CustomerGrid";
import {HomeComponent} from "./home/home.component";
import {AuthentificationRouting} from "./login/authentification.routing";
import { QRCodeModule } from 'angularx-qrcode';
import {SellerHomeComponent} from "./home/sellerHome.component";
import {UserProfileComponent} from "./login/profil/UserProfileComponent";
import {TransactionsComponent} from "./transactions/transactions.component";
import {NgxPaginationModule} from "ngx-pagination";
import {WebcamModule} from "ngx-webcam";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {AdminComponent} from "./admin/AdminComponent";
import {CustomersListComponent} from "./customer/customersList.component";
import {SellerActionsComponent} from "./SellerAction/sellerActions.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerGrid,
    HomeComponent,
    SellerHomeComponent,
    UserProfileComponent,
    TransactionsComponent,
    CustomersListComponent,
    AdminComponent,
    SellerActionsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AgGridModule,
    QRCodeModule,
    ZXingScannerModule,
    WebcamModule,
    AuthentificationRouting,
    ToastrModule.forRoot(),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
