import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() success = new EventEmitter();

  constructor(private appointmentService: AppointmentService) {
  }

  onSubmit(formData){
    //
    // An idenity object is created based on user input.
    // After that, it is being sent to the appointmentService which will register an appointment.
    //
    let form = formData.value;
    let identitate = {
      nume: form['nume'],
      prenume: form['prenume'],
      email: form['email'],
      idnp: form['idnp'] as string,
      telefon: form['telefon']
    };

    if(identitate.idnp.length!= 13){
      console.log(identitate.idnp.length);
      formData.form.controls['idnp'].markAsTouched();
      formData.form.controls['idnp'].setErrors({'incorrect': true});
      return;
    }

    if(this.appointmentService.saveAppointment(this.specialitate, this.data.tur, this.data.key, this.ora, identitate)){
      this.success.emit();
    }
  }
}
