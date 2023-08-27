import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { CreatemeetingComponent } from './createmeeting/createmeeting.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes : Routes=[
  {
    path: '', redirectTo: 'Clients', pathMatch: 'full'
  },
 {path:'Clients', component:CreateclientComponent},
 {path:'Meeting', component:CreatemeetingComponent},
 {path:'Home', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateclientComponent,
    CreatemeetingComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
