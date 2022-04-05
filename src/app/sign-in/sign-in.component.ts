import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
isLoading=false
error:string=''

  constructor(private auth:AuthService,
    private router:Router,
    private http:HttpClient) { }

  ngOnInit(): void {
  }
signForm = new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  name: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  userName: new FormControl('',[Validators.required]),
  phone: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
})
@Input()  userName=this.signForm.value.userName;


onSignIn(){

if(!this.signForm.valid){
  return
}
const userData=this.signForm.getRawValue()
this.http.put('https://lotus-acadmey-default-rtdb.firebaseio.com/UserData.json',userData).subscribe()
const email=this.signForm.value.email;
const password=this.signForm.value.password;


let authObs:Observable<AuthResponse>


authObs=this.auth.signUp(email,password)

authObs.subscribe(
  resData=>{
    console.log(resData);
    this.isLoading=false
    this.router.navigate(['/enter'])
  },
  errorMessage=>{
    console.log(errorMessage);

    this.error=errorMessage
    this.isLoading=false
  })


this.signForm.reset()

}
}
