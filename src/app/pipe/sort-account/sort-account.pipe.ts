import { Pipe, PipeTransform } from '@angular/core';
import 'lodash';

declare var _ :any;
@Pipe({
  name: 'sortAccount'
})
export class SortAccountPipe implements PipeTransform {

  transform(account : any[], sortBy : string, sortValue : number): any{

    if (sortBy === 'firstName') {
      account = _.orderBy(account, ['firstName'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'lastName') {
      account = _.orderBy(account, ['lastName'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'age') {
      account = _.orderBy(account, ['age'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'address') {
      account = _.orderBy(account, ['address'],[sortValue == 1 ? 'asc' : 'desc']);
    }


    if (sortBy === 'email') {
      account = _.orderBy(account, ['email'],[sortValue == 1 ? 'asc' : 'desc']);
    }


    if (sortBy === 'role') {
      account = _.orderBy(account, ['role'],[sortValue == 1 ? 'asc' : 'desc']);
    }


    if (sortBy === 'password') {
      account = _.orderBy(account, ['password'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    return account;
  }

}
