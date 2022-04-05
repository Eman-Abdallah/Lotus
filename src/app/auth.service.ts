import { User } from './user.model';
import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface AuthResponse{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered?:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
activeTimer:any
  constructor(private http:HttpClient,
    private router:Router) { }
user = new User
subject :BehaviorSubject<User>=new BehaviorSubject<User>(this.user)

    signUp(email:string,password:string){
      return  this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgr5yw_HD2KKxHSl-zsh5kxHGCl7A-5qI',{email:email,
      password:password,
      returnSecureToken:true})
      .pipe(catchError(this.handelError),tap(resData=>{
      this.handelAuth(
        resData.email,
         resData.localId
         ,resData.idToken,
       +resData.expiresIn)}))
      }


      signIn(email:string,password:string){
        return  this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgr5yw_HD2KKxHSl-zsh5kxHGCl7A-5qI',{email:email,
        password:password,
        returnSecureToken:true})
        .pipe(catchError(this.handelError),tap(resData=>{
        this.handelAuth(
          resData.email,
           resData.localId
           ,resData.idToken,
         +resData.expiresIn)}))
      }


      private handelError(errorRes:HttpErrorResponse){
        let errorMessage='An unkown error occurred !'

        if(!errorRes.error || !errorRes.error.error){
          return throwError(errorMessage)
        }
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS':
            errorMessage='This email exist already'
            break
            case 'EMAIL_NOT_FOUND':
            errorMessage='This email is not found'
            break
            case 'INVALID_PASSWORD':
              errorMessage='this password is invlaid'
              break
        }
        return throwError(errorMessage)
      }

      private handelAuth(email:string,userId:string,token:string,expiresIn:number,){
        const expire = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User();
        user.email=email;
        user.id=userId;
        user._token=token;
        user._tokenExpirationDate=expire;

          this.subject.next(user)
          // this.autoLogout(expiresIn*1000)
          localStorage.setItem('userData',JSON.stringify(user))
      }


      logOut(){
        this.user._token=''
        this.subject.next(this.user)
        this.router.navigate(['./sign'])
        // localStorage.clear()
        localStorage.removeItem('userData')

        if(this.activeTimer){
          clearTimeout(this.activeTimer)
        }
        this.activeTimer=null
      }
}
