import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName!: string;
  isAuthenticated=false
  islogin=false
  authSub: Subscription = new Subscription;
  constructor(private http:HttpClient,
    private auth:AuthService) { }

  ngOnInit(): void {


    this.authSub= this.auth.subject.subscribe(user=>{
      // this.isAuthenticated = !user ? true : false
      if(user._token ===""||user._token==null){
        this.isAuthenticated=false;
      }else{
        this.isAuthenticated=true;
        this.islogin=true


      }

          })
       
        }

        onlogOut(){
          this.auth.logOut()
          this.islogin=false
        }
}
