import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {User} from "../login/User";
import {SessionStorageService} from "../session-storage.service";
import {Transaction} from "./transaction";
import {TransactionService} from "./transaction.service";

@Component({
  selector: 'transactions',
  templateUrl: './transactions.html',
  styleUrls:['transactionsCss.css']
})
export class TransactionsComponent implements OnInit {
  transactionsForm!: FormGroup;
  loggedInUser: User = new User();
  transactions = new Array<Transaction>()
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;
  tableSizes: any = [5, 10, 15, 20];
  constructor(
    private storageService : SessionStorageService,
    private transactionService : TransactionService

  ) {
  }
  ngOnInit() {

    this.loggedInUser = this.storageService.getItem('currentUser');
    this.getTransactions();

  }
  getTransactions():void{
    this.transactionService.getListTransactions(this.loggedInUser.idUser).subscribe((data) =>{
      this.transactions = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getTransactions();
  }

}
