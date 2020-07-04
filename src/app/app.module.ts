import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { HomeComponent } from './home/home.component';
import { CihCardComponent } from './cih-card/cih-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    TimeComponent,
    AppointmentFormComponent,
    SpecialityComponent,
    HomeComponent,
    CihCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'specialitate', component: SpecialityComponent},
      { path: 'data/:specialitate', component: DateComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
