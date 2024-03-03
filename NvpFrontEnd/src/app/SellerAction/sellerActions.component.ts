import {Component, OnInit} from "@angular/core";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";
import {CustomerService} from "../customer/CustomerService";
import CustomerList from "../customer/customerList";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'sellerActions',
  templateUrl: './sellerActions.html',
  styleUrls:['sellerActions.css']
})
export class SellerActionsComponent implements OnInit {
  loggedInUser: User = new User();
  idCustomer!: number;
  customerFound!: CustomerList;
  initialBalance : any;
  addedBalance: any;
  message!: string;
  message1!: string;
  message0!: string;
  message3!: string;
  message2!:string;
  messageErrorr!:string;
  constructor(
    private storageService : SessionStorageService,
    private customerSerice : CustomerService,
    private toasterService : ToastrService

  ) {
  }
  ngOnInit() {

    this.loggedInUser = this.storageService.getItem('currentUser');

  }


  onValueChange(event: string){
    if(!event){
      /*this.customerService.getListCustomers(this.loggedInUser.idUser).subscribe((data) =>{
        this.myCustomers = data;
      });*/
      this.customerFound = new CustomerList();
    }
  }

  searchCustomers(){
    if(this.idCustomer){
      this.customerSerice.getCustomerById(this.idCustomer).subscribe((data) => {
        this.initialBalance = null;
        this.message = '';
        this.customerFound = data;
        this.message1 = '';
        this.addedBalance = null;
        this.message0 = 'This customer does not exist!' ;
        this.message3 = '';
        this.message2 = '';
        this.messageErrorr = '';
      });
    }

  }

  AddCustomer() {
    this.customerFound.idSeller = this.loggedInUser.idSeler;
    this.customerFound.balance = this.initialBalance;
    this.customerSerice.addCustomer(this.customerFound).subscribe((data) => {
      this.message = 'Customer succefully added!';
    });
  }

  giveBalance(){
    this.customerFound.balance = this.customerFound.balance + this.addedBalance;
    this.customerSerice.giveBalance(this.customerFound).subscribe((data) => {
      this.message1 = 'Balance succefully added!';
    });
  }

  bayDebt(){
    if (this.customerFound.debtAmount == 0){
      this.message3 = '';
      this.messageErrorr = 'The amount debt must be greater than 0 to pay it!'

    } else {
      this.customerFound.debtAmountTotal = this.customerFound.debtAmountTotal + this.customerFound.debtAmount;
      this.customerFound.balance = this.customerFound.balance - this.customerFound.debtAmount;
      this.customerFound.debtAmount = 0;
      this.customerSerice.payDebt(this.customerFound).subscribe((data) => {
        this.message3 = 'Debt amount succefully paid!';
      });
    }

  }
  onBalanceChange(event: string){
    if(this.addedBalance<=0) {
      this.message1 = '';
      this.message2 = 'The amount must be greater than 0 !';
    }
    if(!this.addedBalance && this.addedBalance!=0) {
      this.message2 = '';
    }
  }

}
