import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { AppStudentsComponent } from './app-students/app-students.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    AppStudentsComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
