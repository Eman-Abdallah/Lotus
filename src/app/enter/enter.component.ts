import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../auth.service';
@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  error:string=''
 isLogging=false
  constructor(private auth:AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }
  signInForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),

    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  onlogin(){
    if(!this.signInForm){
      return
    }
    const email=this.signInForm.value.email;
const password=this.signInForm.value.password;

let authObs:Observable<AuthResponse>


authObs=this.auth.signIn(email,password)

authObs.subscribe(
  resData=>{
    console.log(resData);
this.isLogging=true
    this.route.navigate([''])
  },
  errorMessage=>{
    console.log(errorMessage);

    this.error=errorMessage

  })
this.signInForm.reset()
  }
}
