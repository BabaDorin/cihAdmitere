import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy{
  specialitate;
  subscription;
  dataAleasa: boolean;
  data;
  inregistrari;
  time;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { 
    this.specialitate = route.snapshot.paramMap.get('specialitate');
  }

  dates = {
    Tur1: [
      { key: "13iulie", tur: 1, data: 13, luna: 'iulie', ziua: 'Luni' },
      { key: "14iulie", tur: 1, data: 14, luna: 'iulie', ziua: 'Marti' },
      { key: "15iulie", tur: 1, data: 15, luna: 'iulie', ziua: 'Miercuri' },
      { key: "16iulie", tur: 1, data: 16, luna: 'iulie', ziua: 'Joi' },
      { key: "17iulie", tur: 1, data: 17, luna: 'iulie', ziua: 'Vineri' },
      { key: "18iulie", tur: 1, data: 17, luna: 'iulie', ziua: 'Sambata' },

      { key: "20iulie", tur: 1, data: 20, luna: 'iulie', ziua: 'Luni' },
      { key: "21iulie", tur: 1, data: 21, luna: 'iulie', ziua: 'Marti' },
      { key: "22iulie", tur: 1, data: 22, luna: 'iulie', ziua: 'Miercuri' },
      { key: "23iulie", tur: 1, data: 23, luna: 'iulie', ziua: 'Joi' },
      { key: "24iulie", tur: 1, data: 24, luna: 'iulie', ziua: 'Vineri' },
      { key: "25iulie", tur: 1, data: 24, luna: 'iulie', ziua: 'Sambata' },

      { key: "27iulie", tur: 1, data: 27, luna: 'iulie', ziua: 'Luni' },
      { key: "28iulie", tur: 1, data: 28, luna: 'iulie', ziua: 'Marti' },
      { key: "29iulie", tur: 1, data: 29, luna: 'iulie', ziua: 'Miercuri' },
      { key: "30iulie", tur: 1, data: 30, luna: 'iulie', ziua: 'Joi' },
      { key: "31iulie", tur: 1, data: 31, luna: 'iulie', ziua: 'Vineri' },
      { key: "1august", tur: 1, data: 31, luna: 'iulie', ziua: 'Sambata' }
    ],

    Tur2: [
      { key: "27iulie", tur: 1, data: 27, luna: 'iulie', ziua: 'Luni' },
      { key: "28iulie", tur: 1, data: 28, luna: 'iulie', ziua: 'Marti' },
      { key: "29iulie", tur: 1, data: 29, luna: 'iulie', ziua: 'Miercuri' },
      { key: "30iulie", tur: 1, data: 30, luna: 'iulie', ziua: 'Joi' },
      { key: "31iulie", tur: 1, data: 31, luna: 'iulie', ziua: 'Vineri' },
      { key: "1august", tur: 1, data: 31, luna: 'iulie', ziua: 'Sambata' },

      { key: "27iulie", tur: 1, data: 27, luna: 'iulie', ziua: 'Luni' },
      { key: "28iulie", tur: 1, data: 28, luna: 'iulie', ziua: 'Marti' },
      { key: "29iulie", tur: 1, data: 29, luna: 'iulie', ziua: 'Miercuri' },
      { key: "30iulie", tur: 1, data: 30, luna: 'iulie', ziua: 'Joi' },
      { key: "31iulie", tur: 1, data: 31, luna: 'iulie', ziua: 'Vineri' },
      { key: "1august", tur: 1, data: 31, luna: 'iulie', ziua: 'Sambata' }
    ]
  }

  // time = [
  //   { t: '9:00', available: true}, 
  //   { t: '9:30', available: false}, 
  //   { t: '10:00', available: true}, 
  //   { t: '10:30', available: true}, 
  //   { t: '11:00', available: false}, 
  //   { t: '11:30', available: false}, 
  //   { t: '12:00', available: false}, 
  //   { t: '12:30', available: true}, 
  //   { t: '13:00', available: true},
  // ];

  datePicked(d){
    if(d) {
      this.data = d;
      this.dataAleasa = true;
      
      this.subscription = this.appointmentService.getAllForAdmin(this.specialitate, this.data.tur, this.data.key)
        .subscribe(time => 
          {
          this.time = time;
          console.log(time);
          this.inregistrari = this.time.filter(x => x.liber === false);
        });
    }
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
