import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    NavbarComponent,
    TopbarComponent,
    FooterComponent
  ]
})
export class PrincipalModule { }
