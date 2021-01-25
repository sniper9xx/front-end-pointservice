import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from './../../services/examService/exam-service.service';
import { ExamDetail } from './../../model/Exam-detail.class';

@Component({
  selector: 'app-create-exam-detail',
  templateUrl: './create-exam-detail.component.html',
  styleUrls: ['./create-exam-detail.component.css']
})
export class CreateExamDetailComponent implements OnInit {

  constructor(private examService : ExamServiceService) { }

  ngOnInit(): void {
  }


  createExamDetail(name : string, classExam : string, testMark1 : number, testMark2 : number, pointProcess : number, testFinal : number ) {
    let examDetail = new ExamDetail(name, classExam, testMark1, testMark2, pointProcess, testFinal);
    this.examService.createExamDetail(examDetail);
  }
}
