import { Injectable } from '@angular/core';
import { LoginData } from './../../model/LoginData.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userAcoount = new LoginData("thanhdat@gmail.com","123456"); //Tạo 1 tài khoản
  public isAuthenticated : boolean = false;

  constructor(private router : Router) { }
  authenticate(loginData : LoginData) : boolean {  //Hàm kiểm tra => trả ra boolean
    if (this.checkAcount(loginData)) {
      this.isAuthenticated = true;
      return this.isAuthenticated;
    }
    this.isAuthenticated =false
    return false;
  }

  checkAcount(loginData : LoginData) : boolean {  //Kiểm tra account
    return this.checkEmail(loginData.getEmail()) && this.checkPassword(loginData.getPassword());
  }

  checkEmail(email : string) : boolean {   //Kiểm tra email
    return email === this.userAcoount.getEmail();
  }

  checkPassword(password : string) : boolean {  //Kiểm tra password
    return password === this.userAcoount.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }


}
