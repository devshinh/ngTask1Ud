import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaincmpComponent } from './maincmp/maincmp.component';
import { AlterComponent } from './alter/alter.component';
import { FinalMessageComponent } from './final-message/final-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MaincmpComponent,
    AlterComponent,
    FinalMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
