import { Component, OnInit } from '@angular/core';
import { ExamData } from './../../model/ExamData.class';
import { ExamServiceService } from './../../services/examService/exam-service.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  constructor(private examService : ExamServiceService) { }

  ngOnInit(): void {
    this.Validator({
      form: '#form-createExam',
      errorSelector: '.message',
      rules: [
        this.isRequired('#examId'),
        this.isRequired('#nameExam'),
        this.isRequired('#amountExam'),
        this.isRequired('#dateExam'),
      ]
    });
  }

  createExam(examId : number, nameExam : string, amountExam : number, dateExam : Date) {
  	let exam = new ExamData(examId, nameExam, amountExam, dateExam);
    this.examService.createExam(exam);
    this.toast('Thành công','Thêm dữ liệu thành công');
  }

  //Toast
  toast (title, message) {
    const main = document.getElementById('toast1');
    if (main) {
      const toast1 = document.createElement('div');
      toast1.classList.add('toast1');
      toast1.innerHTML =
      `<div class="toast__icon">
         <i class="fa fa-check-circle"></i>
       </div>
       <div class="toast__body">
         <h4 class="toast__title"> ${ title }</h4>
         <p class="toast__msg">${ message }</p>
       </div>
       <div class="toast__close">
         <i class="fa fa-times"></i>
       </div>`;
       main.appendChild(toast1);
    }
 }



  //Validator
  Validator(options) {

    let ruleSelector = {};

    function validate(inputElement, rule) {

      let errorMessage;
      let validIcon = inputElement.parentElement.querySelector('.valid');
      let errorElement = inputElement.parentElement.querySelector(options.errorSelector);
      let rules = ruleSelector[rule.selector];

      for (let i = 0; i < rules.length; i++) {
        errorMessage = rules[i](inputElement.value);
        if (errorMessage) {
            break;
        }
      }

      if (errorMessage) {
        errorElement.innerText = errorMessage;
        inputElement.parentElement.classList.add('invalid');
        inputElement.classList.add('invalid2');
        validIcon.style.display = 'none';

      } else {
        errorElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
        inputElement.classList.remove('invalid2');
        validIcon.style.display = 'block';
        inputElement.parentElement.querySelector('.fa-check-circle').style.color = "#1cc88a";
      }
    }

    let formElement = document.querySelector(options.form);

    if (formElement) {

      //submit form
      formElement.onsubmit = function () {
        options.rules.forEach(rule => {
          let inputElement = formElement.querySelector(rule.selector);
          validate(inputElement, rule);
        });
      }

      options.rules.forEach(rule => {
        //Save rules
          if(Array.isArray(ruleSelector[rule.selector])) {
          ruleSelector[rule.selector].push(rule.test);
          } else {
          ruleSelector[rule.selector] = [rule.test];
          }

        let inputElement = formElement.querySelector(rule.selector);
        if (inputElement) {
          //blur out input
            inputElement.onblur = function () {
              validate(inputElement, rule);
            }

          //when input
          inputElement.oninput = function () {
            let errorElement = inputElement.parentElement.querySelector('.message');
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
            inputElement.classList.remove('invalid2');
          }
        }
      });
    }

  }

  isRequired (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : 'Vui lòng nhập trường này!'
      }
    }
  }
}
