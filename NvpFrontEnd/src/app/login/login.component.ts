import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from "./AuthenticationService";
import {User} from "./User";
import {SessionStorageService} from "../session-storage.service";
import {tap} from "rxjs";


@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:['loginCss2.css']
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
 // returnUrl: string;
  //email: string =''   ;
  //password: string = '' ;
  error : string = '';
  user : User = new User();
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService,
    private toastr: ToastrService,
    //private logedInUserService : LogedInUserService,
    private storageService : SessionStorageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

// for accessing to form fields
  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const email = this.fval['email'].value;
    const password = this.fval['password'].value;
    //console.log(this.user.email)
    const credentials = { email:email, password: password };

    this.authenticationService.login(email,password) .pipe(
      tap(data => {
        if (data === null) {
          throw new Error('No user data received from the backend');
        }
      })
    ).subscribe(
        data => {
          if(!data || data==null){
            this.error = 'les informarmations sont incorrectes';
          }
            this.error = '';
            this.user = new User(data);
            this.storageService.setItem('currentUser', data)
          if(this.user.typeUser == 'customer') {
            this.router.navigate(['/home']);
          }
          if(this.user.typeUser == 'seller') {
            this.router.navigate(['/sellerHome']);
          }
          if(this.user.typeUser == 'admin') {
            this.router.navigate(['/admin']);
          }
        },
        error => {
          this.error = 'les informarmations sont incorrectes';
          this.router.navigate(['/login']);
          this.loading = false;
        });
  }

  hasError(controlName: string, errorName: string) {
    return this.fval[controlName]?.hasError(errorName);

  }


  logAsAdmin() {
    this.router.navigate(['/admin']);

  }
}
