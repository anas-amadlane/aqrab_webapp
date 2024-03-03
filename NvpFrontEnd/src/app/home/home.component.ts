import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";
import {BarcodeFormat} from "@zxing/library";
import {CustomerService} from "../customer/CustomerService";
//import {LogedInUserService} from "../login/logedInUser.service";

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls:['homeCss.css']
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;
  isBalanceNull!: boolean;
  loggedInUser: User = new User();
  protected readonly BarcodeFormat = BarcodeFormat;
  isButtonClicked=false;
  idCustomer!: Number;
  error : string = '';
  constructor(
    private formBuilder: FormBuilder,
    private storageService : SessionStorageService,
    private customerService: CustomerService

  ) {
  }
  ngOnInit() {
    const ctx=this;
    this.homeForm = this.formBuilder.group({});
    this.loggedInUser = this.storageService.getItem('currentUser');
    if(this.loggedInUser.balance==null){
      this.loggedInUser.balance =0;
      ctx.isBalanceNull=true;
    }else{
      ctx.isButtonClicked=false;
    }
  }

  handleScanSuccess(result: any): void {
    this.idCustomer= Number(this.loggedInUser.idCustomer);
    if(Number(result)>0 && this.loggedInUser.balance > Number(result) ){
      const dataToChange = { amountTransaction:Number(result), idUser: this.idCustomer };
      this.customerService.updateCutomer(dataToChange).subscribe(data=>{
        this.loggedInUser.balance=this.loggedInUser.balance-Number(result);
        this.storageService.setItem('currentUser',this.loggedInUser);
        this.isButtonClicked=false;
        this.error=' You have paid an amount : '+Number(result)  +' MAD ' ;
      });
    }else{
      this.error='Invalid value. Please enter a valid  Amount ';
      this.isButtonClicked=false;
    }
  }
  scanCodeQr(){
    this.isButtonClicked=true;
  }
}
