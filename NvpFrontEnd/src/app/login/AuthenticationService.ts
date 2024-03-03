import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "./User";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Conf} from "../core/constants";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private readonly baseUrl= Conf.envUrl;

  loggedIn: boolean = false;
  constructor(
    private http: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.get<any>(`${this.baseUrl}/login`, { params });
  }

  /*logout1() {
    // remove user data from local storage for logout
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next('null');
  }
*/


  logout() {
    this.http.post<any>('/api/logout', {}).subscribe(
      () => {
        this.loggedIn = false;
      },
      error => {
        console.error('Logout failed:', error);
      }
    );
  }
}
