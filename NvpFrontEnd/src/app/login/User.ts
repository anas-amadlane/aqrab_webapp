
export class User {
  idUser: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  typeUser :string;
  monthlyIncome :number;
  balance: number;
  idCustomer: number;
  idBusiness:number;
  idSeler: number;
  totalTransactions!:number;
  numberOfCustomers!:number;
  debtTotalAmountPayed!:number;
  debtTotalAmount!:number;

  constructor(user?: any) {
    this.idUser = user? user.idUser : 0;
    this.firstName = user? user.firstName : '';
    this.lastName = user? user.lastName : '';
    this.email = user? user.email : '';
    this.phone = user? user.phone : 0 ;
    this.password = user? user.password : '';
    this.typeUser = user? user.typeUser : '';
    this.monthlyIncome = user? user.monthlyIncome : 0;
    this.balance = user? user.balance : 0;
    this.idBusiness=user? user.idBusiness : 0;
    this.idCustomer=user? user.idCustomer : 0;
    this.idSeler = user ? user.idSeler : null;
    this.totalTransactions=user? user.totalTransactions : 0;
    this.numberOfCustomers=user? user.numberOfCustomers : 0;
    this.debtTotalAmountPayed=user? user.debtTotalAmountPayed : 0;
    this.debtTotalAmount=user? user.debtTotalAmount : 0;
  }
}
