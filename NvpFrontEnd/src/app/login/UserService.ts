import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from "./User";
import {Conf} from "../core/constants";
import {catchError, Observable, throwError} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl= Conf.envUrl;

  constructor(private http: HttpClient) { }
  register(user: User):Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
  getListSeller():Observable<any>{
    return this.http.get(`${this.baseUrl}/listSeller`);
  }

  handleError(error:HttpErrorResponse){
    return throwError(error);

  }

}
