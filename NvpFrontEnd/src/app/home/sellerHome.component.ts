import {Component, OnInit} from "@angular/core";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";

@Component({
  selector: 'selerHome',
  templateUrl: './sellerHome.html',
  styleUrls:['sellerHomeCss.css']
})
export class SellerHomeComponent implements OnInit {
  myQrCodeValue: string = '';
  qrCodeValue: string='';
  error : string = '';
  loggedInUser: User = new User();
  constructor(
    private storageService : SessionStorageService

  ) {
  }
  ngOnInit() {
    this.loggedInUser = this.storageService.getItem('currentUser');
  }
  createQrCode(){
    if (this.myQrCodeValue && Number(this.myQrCodeValue )> 0) {
      this.qrCodeValue = this.myQrCodeValue.toString();
      this.error='';
    } else {
      this.qrCodeValue='';
      this.error = 'Invalid value. Please enter a Amount greater than 0';
    }
  }
}
