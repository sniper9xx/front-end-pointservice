import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamData } from './../../model/ExamData.class';
import { ExamServiceService } from './../../services/examService/exam-service.service';
import { Subscription } from 'rxjs'
import { ExamDetail } from './../../model/Exam-detail.class';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {
  public check : number = 0;
  public exam :  ExamData = null;
  public subscription : Subscription;
  public ExamDetail : ExamDetail[]=[];


  constructor(
    public activatedRoute : ActivatedRoute,
    public examService : ExamServiceService
  ) { }

  ngOnInit(): void {
   this.handleParam();
   this.ExamDetail = this.examService.getAllExamDetail();
  }

  ngOnDestroy() : void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }

  handleParam () {
     this.subscription = this.activatedRoute.params.subscribe(data => {
       let id = data.id;
       this.exam = this.examService.getExamId(id);
     })
  }

  search(a) {
    this.check = a;
  }

  //Sort
  public sortBy : string;
  public sortValue : number = -1;
  onSort(col) {
    this.sortBy = col;
    this.sortValue = -this.sortValue;
  }

}
