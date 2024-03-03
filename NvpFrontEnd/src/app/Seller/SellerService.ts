import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Conf} from "../core/constants";
import {User} from "../login/User";

@Injectable({ providedIn: 'root' })
export class SellerService {
  private readonly baseUrl= Conf.envUrl +'/seller';
  constructor(private http: HttpClient) { }

  getListCustomer(idPsDelegue :Number): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + '/list' + idPsDelegue);
  }
}
