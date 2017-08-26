import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserFormComponent } from './components/user/user-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],

  // tslint:disable-next-line:no-trailing-whitespace
  declarations: [ 
    AppComponent,
    UserFormComponent,
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
