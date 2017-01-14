import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from 'app/Atithi_Login/login.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from 'app/Atithi_Signup/signup.component';
import { RouterModule } from '@angular/router';
import { signupRoutes } from "app/Atithi_Routing/routing.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(signupRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
