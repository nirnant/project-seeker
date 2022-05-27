import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { SeekerComponent } from './seeker/seeker.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { UploadcotationComponent } from './uploadcotation/uploadcotation.component';

const routes: Routes = [ 

  { path:'login' ,component : LoginComponent},
  { path:'about' ,component : AboutComponent}, 
  { path:'admin' ,component : AdminComponent},
  { path:'company' ,component : CompanyComponent},
  { path:'contact' ,component : ContactComponent},
  { path:'footer' ,component : FooterComponent},
  { path:'header' ,component : HeaderComponent},
  { path:'ragistration' ,component : RagistrationComponent},
  { path:'seeker' ,component : SeekerComponent},
  { path:'services' ,component : ServicesComponent},
  { path:'team' ,component : TeamComponent},
  { path:'uploadcotation' ,component : UploadcotationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


  
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,AboutComponent,AdminComponent,CompanyComponent,ContactComponent,FooterComponent,HeaderComponent,RagistrationComponent,ServicesComponent,SeekerComponent,TeamComponent,UploadcotationComponent]
