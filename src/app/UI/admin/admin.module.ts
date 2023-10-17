import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../shared/material/material.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminModule { }
