import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Conf} from "../core/constants";
import {Transaction} from "./transaction";

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly baseUrl= Conf.envUrl;

  loggedIn: boolean = false;
  constructor(
    private http: HttpClient
  ) {
  }

  getListTransactions(idUser: number): Observable<any[]> {
    const params = new HttpParams()
      .set('idUser', idUser)
    return this.http.get<any[]>(`${this.baseUrl}/transactions`, { params });
  }



}
