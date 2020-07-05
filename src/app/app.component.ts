import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cihAdmitere';
}


// TODO: 
// Appointment form =>  build an object on submit
// Route protection => invalid params == error 404
// Admin view => Admins can view all the appointments for a
// selected date.


// TODO: More appointments at the same time => check if liber
// before saving
// => remove Appoiment form after submitting
// => display specialitate, data, ora + mesaj de confirmare
// pentru appointment form