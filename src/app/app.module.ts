import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UEditorModule,UEditorConfig } from 'ngx-ueditor';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '../../node_modules/_ng2-file-upload@1.2.1@ng2-file-upload'

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './components/index/index.component'
import { UserService } from './services/user/user.service';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanySponsorComponent } from './components/company-sponsor/company-sponsor.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MypublicComponent } from './components/mypublic/mypublic.component';
import { NavComponent } from './components/nav/nav.component';
import { TournoteDetailComponent } from './components/tournote-detail/tournote-detail.component';
import { TournoteSubmitComponent } from './components/tournote-submit/tournote-submit.component';
import { UserComponent } from './components/user/user.component';
import { TournoteService } from './services/tournote/tournote.service';
import { CommentService } from './services/comment/comment.service';
import { TogetherService } from './services/together/together.service';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    CompanyComponent,
    CompanyDetailComponent,
    CompanySponsorComponent,
    FooterComponent,
    LoginComponent,
    MypublicComponent,
    NavComponent,
    TournoteDetailComponent,
    TournoteSubmitComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UEditorModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [
    UserService,
    UEditorConfig,
    TournoteService,
    CommentService,
    TogetherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
