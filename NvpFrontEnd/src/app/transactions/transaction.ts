
export class Transaction {
  seller: string;
  amount: number;
  date: Date;

  constructor(transaction?: any) {
    this.seller = transaction? transaction.firstName : '';
    this.amount = transaction? transaction.lastName : '';
    this.date = transaction? transaction.email : '';




  }
}
