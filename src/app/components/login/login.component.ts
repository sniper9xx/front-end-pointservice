import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { LoginData } from './../../model/LoginData.class';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService : AuthenticationService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.Validator({
      form: '#form-login',
      errorSelector: '.message',
      rules: [
        this.isRequired('#email'),
        this.isEmail('#email'),
        this.isRequired('#password'),
        this.isPassword('#password', 6),
        this.isConfirm('#confirmPassword', function () {
          return document.querySelector('#form-login #password');
        }, "Mật khẩu nhập lại không chính xác")
      ]
    });

  }

  onSubmit(formLogin : NgForm) {
    let email = (<HTMLInputElement>document.getElementById("email"));
    let password = (<HTMLInputElement>document.getElementById("password"));
    let messageEmail = (<HTMLInputElement>email.parentElement.querySelector('.message'));
    let messagePassword = (<HTMLInputElement>password.parentElement.querySelector('.message'));

    const loginData = new LoginData(formLogin.value.email, formLogin.value.password);

      if (this.authenticationService.authenticate(loginData)) {
        this.router.navigate(['homepage']);
      } else {
        // if (this.authenticationService.checkEmail(email.value) == false && this.authenticationService.checkEmail(password.value) == false) {
        //   messageEmail.innerHTML = "Email không chính xác. Vui lòng kiểm tra lại!";
        //   messagePassword.innerHTML = "Password không chính xác. Vui lòng kiểm tra lại!";
        // } else if (this.authenticationService.checkEmail(email.value) == false) {
        //   messageEmail.innerHTML = "Email không chính xác. Vui lòng kiểm tra lại!";
        // } else if (this.authenticationService.checkEmail(password.value) == false) {
        //   messagePassword.innerHTML = "Password không chính xác. Vui lòng kiểm tra lại!"
        // }
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

  //Định nghĩa các rules

  //isRequired
  isRequired (selector) {
    return {
      selector: selector,
      test: function (value) {
        return value.trim() ? undefined : 'Vui lòng nhập trường này!'
      }
    }
  }

  //isEmail
  isEmail (selector) {
    return {
      selector: selector,
      test: function (value) {
        var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regexEmail.test(value) ? undefined : 'Trường này phải là Email!'
      }
    }
  }

  //isPassword
  isPassword (selector, min) {
    return {
      selector: selector,
      test: function (value) {
        return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${ min } kí tự!`
      }
    }
  }

  //isConfirm
  isConfirm (selector, getConfirm, message) {
    return {
      selector: selector,
      test: function (value) {
        return value.length == getConfirm().value ? undefined : message || 'Giá trị nhập vào không chính xác!'
      }
    }
  }

}

