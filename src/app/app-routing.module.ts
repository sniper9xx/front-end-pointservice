//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ExamDetailComponent } from './components/exam-detail/exam-detail.component'
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AccountProductComponent } from './components/account-product/account-product.component';
import { ExamProductComponent } from './components/exam-product/exam-product.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CreateExamDetailComponent } from './components/create-exam-detail/create-exam-detail.component';

//router
import { Routes, RouterModule } from '@angular/router'


const appRoute : Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'exam-product',
    component: ExamProductComponent,
  },
  {
    path: 'exam-product/:id',
    component: ExamDetailComponent
  },
  {
    path: 'create-exam',
    component: CreateExamComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'account-product',
    component: AccountProductComponent
  },
  {
    path: 'account-product/:id',
    component: AccountDetailComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'create-exam-detail',
    component: CreateExamDetailComponent
  }
]


@NgModule({
  declarations: [],
  imports: [CommonModule,

RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
