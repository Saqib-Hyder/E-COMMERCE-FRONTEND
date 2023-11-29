import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(loginDetails: Login) {
    return this.http.post<any>('http://localhost:8080/api/auth/login', {
      username: loginDetails.userName,
      password: loginDetails.userPassWord,
    });
  }
  signup(signupBody: any) {
   return this.http.post<any>('http://localhost:8080/api/auth/signup', {
      username: signupBody.newUserName,
      password: signupBody.newUserPassword,
      email: signupBody.newUserMail,
      phoneNum: signupBody.newUserPhoneNumber
    });
  }
  checkIfUserExists(signupBody:any){
    return this.http.post<any>('http://localhost:8080/api/auth/checkSignUpUser',{
      username: signupBody.newUserName,
      password: signupBody.newUserPassword,
      email: signupBody.newUserMail,
      phoneNum: signupBody.newUserPhoneNumber
    },);
  }
}
