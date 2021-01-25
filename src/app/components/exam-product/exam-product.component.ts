import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from './../../services/examService/exam-service.service';
import { ExamData } from './../../model/ExamData.class';

@Component({
  selector: 'app-exam-product',
  templateUrl: './exam-product.component.html',
  styleUrls: ['./exam-product.component.css']
})
export class ExamProductComponent implements OnInit {
  public exam : ExamData[]=[];
  public check : number = 0;
  constructor(public ExamService : ExamServiceService) { }

  ngOnInit(): void {
   this.exam = this.ExamService.getAllExam();
  }

  search(a) {
    this.check = a;
  }

  //Pipe

  //Filter
  public idExam : number;
  public nameExam : string;


  //Sort
  public sortBy : string;
  public sortValue : number = -1;
  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }
}
