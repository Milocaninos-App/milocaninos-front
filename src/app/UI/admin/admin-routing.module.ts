import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      { path: 'home', component: AdminHomeComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
