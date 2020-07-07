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

    console.log('onSubmit called');

    let identitate = {
      nume: form['nume'],
      prenume: form['prenume'],
      email: form['email'],
      idnp: form['idnp'],
      telefon: form['telefon']
    };

    this.appointmentService.saveAppointment(this.specialitate, this.data.tur, this.data.key, this.ora, identitate);
  }
}
