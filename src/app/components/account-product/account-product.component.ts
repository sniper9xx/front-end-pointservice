import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './../../services/acoountService/account-service.service';
import { UserData } from './../../model/UserData.class';

@Component({
  selector: 'app-account-product',
  templateUrl: './account-product.component.html',
  styleUrls: ['./account-product.component.css']
})
export class AccountProductComponent implements OnInit {

  public account : UserData[] = [];
  public check : number = 0;

  constructor(
    public accountService : AccountServiceService
  ) { }

  ngOnInit(): void {
    this.account = this.accountService.getAllAccount();
  }

  fillNameAccount(a) {
    this.check = a;
  }

  //Pipe
  //Filter
  public firstName : string;
  public lastName : string;

  //Sort
  public sortBy : string;
  public sortValue : number = -1;
  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }
}
