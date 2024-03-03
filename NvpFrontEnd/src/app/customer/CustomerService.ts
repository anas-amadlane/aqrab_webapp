import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Conf} from "../core/constants";
import CustomerList from "./customerList";

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly baseUrl= Conf.envUrl +'/customer';
  constructor(private http: HttpClient) { }

  updateCutomer(dataToChange :any): Observable<any> {
    const params = new HttpParams()
      .set('amountTransaction', dataToChange.amountTransaction)
      .set('idCustomer', dataToChange.idUser);
    return this.http.get<any>(`${this.baseUrl}/updateCustomer` ,{ params } );
  }

  getListCustomers(idUser: number): Observable<any[]> {
    const params = new HttpParams()
      .set('idUser', idUser)
    return this.http.get<any[]>(`${this.baseUrl}/customers`, { params });
  }

  getCustomerById(idCustomer: number): Observable<any> {
    const params = new HttpParams()
      .set('idCustomer', idCustomer)
    return this.http.get<any>(`${this.baseUrl}/find-customer`,{params});

  }

  addCustomer(customer: CustomerList):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/add-customer`, customer);
  }

  giveBalance(customer: CustomerList):Observable<any>{
      return this.http.post<any>(`${this.baseUrl}/add-balance`, customer);
  }

  payDebt(customer: CustomerList):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/pay-debt`, customer);
  }


}
