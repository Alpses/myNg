import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { MessCodeComponent } from './mess-code/mess-code.component';
import { HighttextDirective } from './highttext.directive';
import { GreetDirective } from './greet.directive';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessCodeComponent,
    HighttextDirective,
    GreetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
