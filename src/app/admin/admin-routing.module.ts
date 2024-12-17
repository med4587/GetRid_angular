import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
  { path: 'challenges', component: ChallengeDashboardComponent },
  { path: 'material', component: MaterialDashboardComponent }] },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
