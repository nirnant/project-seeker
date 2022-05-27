import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { SeekerComponent } from './seeker/seeker.component';
import { FooterComponent } from './footer/footer.component';
import { HeaComponent } from './hea/hea.component';
import { UploadcotationComponent } from './uploadcotation/uploadcotation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    LoginComponent,
    RagistrationComponent,
    AdminComponent,
    CompanyComponent,
    SeekerComponent,
    FooterComponent,
    HeaComponent,
    UploadcotationComponent,
    routingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
