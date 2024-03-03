import {Component, OnInit} from "@angular/core";
import { ColDef } from 'ag-grid-community';
import {User} from "../login/User";
import {SellerService} from "./SellerService";
import {Router} from "@angular/router";

@Component({
  selector: 'customerGrid',
  templateUrl: './customerGrid.html',
  styleUrls :['sellerCss.css']
})
export class CustomerGrid  implements  OnInit{

  // Change the type to an array of ColDef
  user!:User;
  constructor( private sellerService:SellerService,private router: Router){}
  ngOnInit(): void {
   // const userConnected = JSON.parse(localStorage.getItem('current_user') ?? 'null');

  }

/*
  columnDefs: ColDef[] = [
    { headerName: 'Customer', field: 'customer' },
    { headerName: 'Balance', field: 'balance' },
    { headerName: 'Give Balance', field: 'price' },
    { headerName: 'Payment Debt', field: 'prices' },
    { headerName: 'Date Payment', field: 'datePayment' },
    { headerName: 'Debt Amount', field: 'debtAmount' },
    { headerName: 'Date Last Transaction', field: 'lastTransactionDate' },
  ];

  rowData: User[] = [
    { customer: 'Toyota', balance: 'Celica', price: 35000, prices: 'Some debt', datePayment: '2022-02-15', debtAmount: 500, lastTransactionDate: '2022-02-10' },
    { customer: 'Ford', balance: 'Mondeo', price: 32000, prices: 'Another debt', datePayment: '2022-02-18', debtAmount: 700, lastTransactionDate: '2022-02-12' },
  ];

  searchCustomer() {
    console.log("hello");
    this.sellerService.getListCustomer(12).subscribe((data)=>
    {
      console.log('data', data);
      this.rowData=data;
    });
  }*/
}
