import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExam'
})
export class FilterExamPipe implements PipeTransform {

  transform(exam: any[], idExam : string, nameExam : string): any {
    if(!idExam && !nameExam) {
    	return exam;
    } else {
    	if(idExam) {
    		exam = exam.filter(x => {
    		return x['idExam'].toString().indexOf(idExam) != -1;
    		})
    	}
    	if(nameExam) {
    		exam = exam.filter(x => {
    		return x['nameExam'].toString().toLowerCase().indexOf(nameExam.toLowerCase()) != -1;
    		})
    	}
      return exam;
      }
  }

}
