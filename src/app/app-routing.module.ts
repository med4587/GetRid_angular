import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChallengesComponent } from './list-challenges/list-challenges.component';
//import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { MaterialPageComponent } from './material-page/material-page.component';

const routes: Routes = [
  //{path:"listchallenge",component:ChallengesPageComponent},
  {path:"home",component:HomePageComponent},
  {path:"",component:LoginComponent},
  {path:"admin",loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"challenges",component:ChallengePageComponent},
  {path:"materials",component:MaterialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }