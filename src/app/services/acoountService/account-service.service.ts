import { Injectable } from '@angular/core';
import { UserData } from '../../model/UserData.class';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {


  public accounts : UserData[] = [
    {
      id: 11092,
      firstName: 'Nguyen',
      lastName: 'Van B',
      age: 20,
      address: ' Ha Noi',
      role: 'teacher',
      email: 'vanb.nguyen@gmail.com',
      password: 'vanb12345',
      confirmPassword : 'vanb12345'
    },
    {
      id: 11202,
      firstName: 'Nguyen',
      lastName: 'Van C',
      age: 15,
      address: ' Ha Noi',
      role: 'student',
      email: 'vanc.nguyen@gmail.com',
      password: 'vanb12345',
      confirmPassword: 'vanb12345'
    }
  ]

  getAllAccount() {
    return this.accounts;
  }

  getAccountId(idAccount : number) {
    let result = null;
    let length = this.accounts.length;
    for (let index = 0; index < length; index++) {
        if (this.accounts[index].id == idAccount) {
          result = this.accounts[index];
          break;
        }
    }
    return result;
  }
  constructor() {

     }

  public createAccount(account : UserData) {
    this.accounts.push(account);
  }

}
