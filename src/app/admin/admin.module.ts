import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ChallengeDashboardComponent } from './challenge-dashboard/challenge-dashboard.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    ChallengeDashboardComponent,
    MaterialDashboardComponent,
    AdminNavBarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
