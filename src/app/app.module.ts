import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateExamComponent } from './components/create-exam/create-exam.component';
import { ExamDetailComponent } from './components/exam-detail/exam-detail.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { AccountProductComponent } from './components/account-product/account-product.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { ExamProductComponent } from './components/exam-product/exam-product.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CreateExamDetailComponent } from './components/create-exam-detail/create-exam-detail.component';

//pipe
import { SortAccountPipe } from './pipe/sort-account/sort-account.pipe';
import { ExamProductPipe } from './pipe/sort-exam-product/exam-product.pipe';
import { ExamDetailPipe } from './pipe/sort-exam-detail/exam-detail.pipe';
import { FilterExamPipe } from './pipe/filter-exam/filter-exam.pipe';
import { FilterAccountPipe } from './pipe/filter-account/filter-account.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CreateExamComponent,
    ExamDetailComponent,
    CreateAccountComponent,
    AccountProductComponent,
    AccountDetailComponent,
    ExamProductComponent,
    MyAccountComponent,
    CreateExamDetailComponent,
    SortAccountPipe,
    ExamProductPipe,
    ExamDetailPipe,
    FilterExamPipe,
    FilterAccountPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
