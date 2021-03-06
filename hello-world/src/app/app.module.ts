import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SetmycolorDirective } from './directives/setmycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    SetmycolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
