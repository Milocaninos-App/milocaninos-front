import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtGateway } from './domain/models/JWT/gateway/jwt-gateway';
import { Adoption } from './domain/models/adoption/adoption';
import { AuthGateway } from './domain/models/auth/gateway/auth-gateway';
import { DogGateway } from './domain/models/dog/gateway/dog-gateway';
import { DonationGateway } from './domain/models/donation/gateway/donation-gateway';
import { UserGateway } from './domain/models/user/gateway/user-gateway';
import { AdoptionService } from './infraestructure/driven-adapter/adoption-api/adoption.service';
import { AuthService } from './infraestructure/driven-adapter/auth-api/auth.service';
import { DogService } from './infraestructure/driven-adapter/dog-api/dog.service';
import { DonationService } from './infraestructure/driven-adapter/donation-api/donation.service';
import { JwtLocalManageService } from './infraestructure/driven-adapter/jwt-api/jwt-local-manage.service';
import { UserService } from './infraestructure/driven-adapter/user-api/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    { provide: JwtGateway, useClass: JwtLocalManageService },
    { provide: UserGateway, useClass: UserService },
    { provide: AuthGateway, useClass: AuthService },
    { provide: DogGateway, useClass: DogService },
    { provide: DonationGateway, useClass: DonationService },
    { provide: Adoption, useClass: AdoptionService },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
