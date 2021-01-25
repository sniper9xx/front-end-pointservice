import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './../../services/acoountService/account-service.service';
import { UserData } from './../../model/UserData.class';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private accountService : AccountServiceService) { }

  ngOnInit(): void {
  }

  createAccount(firstName : string, lastName : string, age : number, address : string, role : string,
     email : string, password : string, confirmPassword : string) {
    let account = new UserData(firstName ,lastName, age ,address , role, email, password, confirmPassword);
    this.accountService.createAccount(account);
  }

}
