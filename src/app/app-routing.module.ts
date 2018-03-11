import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanySponsorComponent } from './components/company-sponsor/company-sponsor.component';
import { MypublicComponent } from './components/mypublic/mypublic.component';
import { TournoteDetailComponent } from './components/tournote-detail/tournote-detail.component';
import { TournoteSubmitComponent } from './components/tournote-submit/tournote-submit.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:IndexComponent},
    {path:'index',component:IndexComponent},
    {path:'company',component:CompanyComponent},
    {path:'companyDetail/:cid',component:CompanyDetailComponent},
    {path:'companySponsor',component:CompanySponsorComponent},
    {path:'myPublic',component:MypublicComponent},
    {path:'detailTournote/:tourid',component:TournoteDetailComponent},
    {path:'submitTournote',component:TournoteSubmitComponent},
    {path:'user',component:UserComponent},
  ]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
