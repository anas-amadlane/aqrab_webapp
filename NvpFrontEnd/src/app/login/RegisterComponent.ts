import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {UserService} from "./UserService";

@Component({
  selector: 'app-register',
  templateUrl: 'registerComponent.html',
  styleUrls:['login.component.scss']
})
export class RegisterComponent implements OnInit {
  errorEmail : string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }
  registerForm: FormGroup =new FormGroup({});
  loading = false;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      typeUser: ['', Validators.required],
      monthlyIncome: ['',[Validators.required,this.monthlyIncomeValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Subscribe to changes in the 'typeUser' control to dynamically update 'monthlyIncome'
    this.registerForm.get('typeUser')?.valueChanges.subscribe((value) => {
      if (value === 'seller') {
        this.registerForm.get('monthlyIncome')?.setValue(null);
        this.registerForm.get('monthlyIncome')?.disable();
      } else {
        this.registerForm.get('monthlyIncome')?.enable();
      }
    });
  }

  monthlyIncomeValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    const isValid = /^\d+(\.\d{2})?$/.test(value) && parseFloat(value) > 0;
    return isValid ? null : { invalidMonthlyIncome: true };
  }


  get fval() { return this.registerForm.controls; }


  onFormSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value).subscribe(
      (data)=>{
        if(data==null){
          this.errorEmail='this email already exists';
        }else{
          alert('User Registered successfully!!');
          this.router.navigate(['/login']);
        }
      },
      (error)=>{
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }
  hasError(controlName: string, errorName: string) {
    return this.fval[controlName]?.hasError(errorName);
  }

}
