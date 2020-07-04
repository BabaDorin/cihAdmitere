import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})

export class AppointmentFormComponent{

  specialitate;
  data;
  ora;

  constructor(private route: ActivatedRoute) {
    this.specialitate = route.snapshot.paramMap.get('specialitate');
    this.data = route.snapshot.paramMap.get('data');
    this.ora = route.snapshot.paramMap.get('ora');
  }
}
