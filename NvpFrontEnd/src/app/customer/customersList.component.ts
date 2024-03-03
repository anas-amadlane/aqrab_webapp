import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";
import {CustomerService} from "./CustomerService";
import CustomerList from "./customerList";

@Component({
  selector: 'customersList',
  templateUrl: './customersList.html',
  styleUrls:['CustomersListCss.css']
})
export class CustomersListComponent implements OnInit {
  customersListForm!: FormGroup;
  loggedInUser: User = new User();
  myCustomers = new Array<CustomerList>()
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  idCustomer!: number
  constructor(
    private formBuilder: FormBuilder,
    private storageService : SessionStorageService,
    private customerService : CustomerService

  ) {
  }
  ngOnInit() {
    this.customersListForm = this.formBuilder.group({});
    this.loggedInUser = this.storageService.getItem('currentUser');
    this.getCustomers();
    console.log(this.myCustomers);

  }
  getCustomers():void{

    this.customerService.getListCustomers(this.loggedInUser.idUser).subscribe((data) =>{
      this.myCustomers = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getCustomers();
  }
  searchCustomers() {
    if(this.idCustomer) {
      this.myCustomers = this.myCustomers.filter(customer => customer.idBusiness === this.idCustomer);
    }
    else{
      this.customerService.getListCustomers(this.loggedInUser.idUser).subscribe((data) =>{
        this.myCustomers = data;
      });
    }
  }

  onValueChange(event: string){
    if(!event){
      this.customerService.getListCustomers(this.loggedInUser.idUser).subscribe((data) =>{
        this.myCustomers = data;
      });
    }

  }

}
