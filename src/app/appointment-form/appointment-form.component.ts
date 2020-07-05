import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})

export class AppointmentFormComponent{

  @Input('specialitate') specialitate;
  @Input('data') data;
  @Input('ora') ora;

  constructor(private appointmentService: AppointmentService) {
  }

  onSubmit(form){
    console.log('data: ' + this.data + '  ora: ' + this.ora)
    this.appointmentService.saveAppointment(this.specialitate, this.data, this.ora, {nume: form['nume'], prenume:form['prenume']});
  }
}
