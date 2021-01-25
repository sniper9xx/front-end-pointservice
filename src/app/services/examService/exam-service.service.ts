import { Injectable } from '@angular/core';
import { ExamData } from './../../model/ExamData.class';
import { ExamDetail } from './../../model/Exam-detail.class';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  public exam : ExamData[] = [
    {
      idExam: 11010,
      nameExam: 'Auto CAD',
      amountExam : 60,
      dateExam: new Date('01/01/2021')
    },
    {
      idExam: 21091,
      nameExam: 'C++',
      amountExam : 60,
      dateExam: new Date('01/02/2021')
    }
  ]

  public examDetail : ExamDetail[] = [
    {
      name : 'Nguyễn Văn An',
      classExam : '60th2',
      testMark1 :  7,
      testMark2 : 9,
      pointProcess : 6,
      testFinal : 5
    },
    {
      name : 'Nguyễn Văn Binh',
      classExam : '60th2',
      testMark1 :  5,
      testMark2 : 8,
      pointProcess : 7,
      testFinal : 8
    },
  ]

  constructor() { }

  getAllExam() {
    return this.exam;
  }

  getAllExamDetail () {
    return this.examDetail;
  }

  getExamId(id : number) {
    let result = null;
    let length = this.exam.length;
    for (let index = 0; index < length; index++) {
        if (this.exam[index].idExam == id) {
          result = this.exam[index];
          break;
        }
    }
    return result;
  }

  //Create exam
  public createExam(exam : ExamData) {
		this.exam.push(exam);
  }

  //Create exam detail
  public createExamDetail(createED : ExamDetail) {
    this.examDetail.push(createED);
  }


}
