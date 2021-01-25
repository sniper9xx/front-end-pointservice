import { Pipe, PipeTransform } from '@angular/core';
import 'lodash';

declare var _ :any;
@Pipe({
  name: 'examDetail'
})
export class ExamDetailPipe implements PipeTransform {

  transform(examDetail : any[], sortBy : string, sortValue : number): any{
    if (sortBy === 'name') {
      examDetail = _.orderBy(examDetail, ['name'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    // if (sortBy === 'classDetail') {
    //   examDetail = _.orderBy(examDetail, ['classDetail'],[sortValue == 1 ? 'asc' : 'desc']);
    // }

    if (sortBy === 'testMark1') {
      examDetail = _.orderBy(examDetail, ['testMark1'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'testMark2') {
      examDetail = _.orderBy(examDetail, ['testMark2'],[sortValue == 1 ? 'asc' : 'desc']);
    }


    if (sortBy === 'pointProcess') {
      examDetail = _.orderBy(examDetail, ['pointProcess'],[sortValue == 1 ? 'asc' : 'desc']);
    }


    if (sortBy === 'testFinal') {
      examDetail = _.orderBy(examDetail, ['testFinal'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    return examDetail;
  }

}
