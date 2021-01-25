import { Pipe, PipeTransform } from '@angular/core';
import 'lodash';

declare var _ :any;
@Pipe({
  name: 'examProduct'
})
export class ExamProductPipe implements PipeTransform {

  transform(exam : any[], sortBy : string, sortValue : number): any{
    if (sortBy === 'idExam') {
      exam = _.orderBy(exam, ['idExam'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'nameExam') {
      exam = _.orderBy(exam, ['nameExam'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'amountExam') {
      exam = _.orderBy(exam, ['amountExam'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    if (sortBy === 'dateExam') {
      exam = _.orderBy(exam, ['dateExam'],[sortValue == 1 ? 'asc' : 'desc']);
    }

    return exam;
  }

}
