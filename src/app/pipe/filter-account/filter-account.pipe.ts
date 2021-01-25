import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAccount'
})
export class FilterAccountPipe implements PipeTransform {

  transform(account: any[], firstName : string, lastName : string): any {

    if(firstName) {
      account = account.filter(x => {
      return x['firstName'].toString().toLowerCase().indexOf(firstName.toLowerCase()) != -1;
      })
    }

    if(lastName) {
      account = account.filter(x => {
      return x['lastName'].toString().toLowerCase().indexOf(lastName.toLowerCase()) != -1;
      })
    }
      return account;

  }

}
