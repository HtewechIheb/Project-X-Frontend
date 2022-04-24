import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardButtonComponent } from './components/shared/card-button/card-button.component';
import { CompanyThumbnailComponent } from './components/shared/company-thumbnail/company-thumbnail.component';
import { OfferItemComponent } from './components/home/offers-list/offers-list-item/offers-list-item.component';
import { OffersListComponent } from './components/home/offers-list/offers-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterCandidateComponent } from './components/register/register-candidate/register-candidate.component';
import { RegisterCompanyComponent } from './components/register/register-company/register-company.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { JobDescriptionFormComponent } from './components/add-offer/job-description-form/job-description-form.component';
import { ProfileDetailsFormComponent } from './components/add-offer/profile-details-form/profile-details-form.component';
import { OfferDetailsComponent } from './components/shared/offer-details/offer-details.component';
import { OfferPreviewComponent } from './components/add-offer/offer-preview/offer-preview.component';
import { ViewOfferComponent } from './components/view-offer/view-offer.component';
import { ViewOffersComponent } from './view-offers/view-offers.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationDialogComponent } from './components/shared/application-dialog/application-dialog.component';
import { UnauthorizedInterceptor } from './services/unauthorized-interceptor.service';
import { MessageService } from 'primeng/api';
import { ToastrService } from './services/toastr.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardButtonComponent,
    CompanyThumbnailComponent,
    OfferItemComponent,
    OffersListComponent,
    HomeComponent,
    RegisterComponent,
    RegisterCandidateComponent,
    RegisterCompanyComponent,
    AddOfferComponent,
    JobDescriptionFormComponent,
    ProfileDetailsFormComponent,
    OfferDetailsComponent,
    OfferPreviewComponent,
    ViewOfferComponent,
    ViewOffersComponent,
    LoginComponent,
    ApplicationDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/api/auth/login', 'http://localhost:8080/api/auth/register']
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
