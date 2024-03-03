export default class CustomerList {
  idBusiness:number;
  firstName: string;
  balance: number;
  dateLastPayement: Date;
  debtAmount: number;
  dateLastTransaction: Date;
  idSeller: number;
  debtAmountTotal: number;


  constructor(customer?: any) {
    this.idBusiness = customer ? customer.idBusiness : null;
    this.firstName = customer ? customer.firstName : '';
    this.balance = customer ? customer.balance : null;
    this.dateLastPayement = customer ? customer.dateLastPayement : null;
    this.debtAmount = customer ? customer.debtAmount : 0;
    this.dateLastTransaction = customer ? customer.dateLastTransaction : null;
    this.idSeller = customer ? customer.idSeller : null;
    this.debtAmountTotal = customer ? customer.debtAmountTotal : 0;

  }


}
