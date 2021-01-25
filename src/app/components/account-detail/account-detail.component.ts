import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from './../../model/UserData.class';
import { AccountServiceService } from './../../services/acoountService/account-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  public account : UserData = null;
  public check : number;
  public subscription : Subscription;
  constructor(
    public activatedRoute : ActivatedRoute,
    public accountServiceService : AccountServiceService
  ) { }

  ngOnInit(): void {
    this.handleParamAccount();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParamAccount() {
    this.subscription = this.activatedRoute.params.subscribe(data => {
      let id = data.id;
      this.account = this.accountServiceService.getAccountId(id);
    })
  }

  hiden(a) {
    this.check = a;

  }

  Save(a) {
    this.check = a;
  }

  Modify(a) {
    this.check = a;
  }

  Cancel() {

  }
}
