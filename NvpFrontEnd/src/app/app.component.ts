import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./login/AuthenticationService";
import {Router} from "@angular/router";
import {User} from "./login/User";
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Aqrab-front-web';
  currentUser!: User;
  ngOnInit(): void {

  }
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  login() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
