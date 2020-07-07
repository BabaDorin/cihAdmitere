import { CihCardComponent } from '../cih-card/cih-card.component';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnDestroy {
  specialitate: string;
  dataAleasa: boolean;
  data;
  subscription;
  timePicked;
  time;

  specialitati = [
    'educatieTimpurie',
    'contabilitate',
    'papp',
    'ecologie',
    'aaw',
    'invatamantPrimar',
    'asistentaSociala'
  ];

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
      { key: "3august", tur: 2, data: 3, luna: 'august', ziua: 'Luni' },
      { key: "4august", tur: 2, data: 4, luna: 'august', ziua: 'Marti' },
      { key: "5august", tur: 2, data: 5, luna: 'august', ziua: 'Miercuri' },
      { key: "6august", tur: 2, data: 6, luna: 'august', ziua: 'Joi' },
      { key: "7august", tur: 2, data: 7, luna: 'august', ziua: 'Vineri' },
      { key: "8august", tur: 2, data: 8, luna: 'august', ziua: 'Sambata' },

      { key: "10august", tur: 2, data: 10, luna: 'august', ziua: 'Luni' },
      { key: "11august", tur: 2, data: 11, luna: 'august', ziua: 'Marti' },
      { key: "12august", tur: 2, data: 12, luna: 'august', ziua: 'Miercuri' },
      { key: "13august", tur: 2, data: 13, luna: 'august', ziua: 'Joi' },
      { key: "14august", tur: 2, data: 14, luna: 'august', ziua: 'Vineri' },
      { key: "15august", tur: 2, data: 15, luna: 'august', ziua: 'Sambata' }
    ]
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService,
    private viewportScroller: ViewportScroller) {
    this.specialitate = route.snapshot.paramMap.get('specialitate');

    if (!this.specialitati.includes(this.specialitate)) {
      this.router.navigate(['/error']);
    }
  }

  datePicked(d) {
    if (d) {
      this.data = d;
      this.dataAleasa = true;

      this.subscription = this.appointmentService.getAll(this.specialitate, this.data.tur, this.data.key).subscribe(time => {
        console.log('called getAll(' + this.specialitate + ', ' + this.data.key + ')');
        this.time = time;
        console.log('time object after query: ');
        console.log(this.time);
        this.viewportScroller.scrollToAnchor('appointment');
      });

      this.timePicked = null;
    }
  }

  pickTime(t) {
    if (t.available) {
      this.timePicked = t;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}