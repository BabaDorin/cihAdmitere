import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {

  specialitati;
  dataTur1; dataTur2; ore; tur;

  constructor(private db: AngularFireDatabase) {

  }



  init() {
    // Generates objects as following
    // ♦ specialitate
    // |--tur
    //    |--data
    //         |--ora
    //            |--nume
    //            |--prenume
    //            |--liber (da / nu)

    // for users get only [ora] and [liber]
    // for admins - get the entire object

    this.tur = [
      'tur1', 'tur2'
    ];

    this.specialitati = [
      'educatieTimpurie',
      'contabilitate',
      'papp',
      'ecologie',
      'aaw',
      'invatamantPrimar',
      'asistentaSociala'
    ];

    this.dataTur1 = [
      '13iulie', '14iulie',
      '15iulie', '16iulie',
      '17iulie', '18iulie',

      '20iulie', '21iulie',
      '22iulie', '23iulie',
      '24iulie', '25iulie',

      '27iulie', '28iulie',
      '29iulie', '30iulie',
      '31iulie', '1august',
    ];

    this.dataTur2 = [
      '3august', '4august',
      '5august', '6august',
      '7august', '8august',

      '10august', '11august',
      '12august', '13august',
      '14august', '15august'
    ];

    this.ore = [
      '08:30',
      '09:00', '09:30',
      '10:00', '10:30',
      '11:00', '11:30',
      '12:00', '12:30',
      '13:00', '13:30',
      '14:00', '14:30',
      '15:00', '15:30',
    ]

    let specialitate;
    let data;
    let ora;
    let tur;


    //Inregistrare tur 1
    for (let sp in this.specialitati) {
      for (let d in this.dataTur1) {
        for (let o in this.ore) {
          specialitate = this.specialitati[sp];
          data = this.dataTur1[d];
          ora = this.ore[o];
          this.db.database.ref().child('/' + specialitate + '/tur1/' + data + '/' + ora + '/').set({
            liber: true
          });
        }
      }
      console.log(specialitate + ' tur1 has been registered');
    }

    //Inregistrare tur 2
    for (let sp in this.specialitati) {
      for (let d in this.dataTur2) {
        for (let o in this.ore) {
          specialitate = this.specialitati[sp];
          data = this.dataTur2[d];
          ora = this.ore[o];
          this.db.database.ref().child('/' + specialitate + '/tur2/' + data + '/' + ora + '/').set({
            liber: true
          });
        }
      }
      console.log(specialitate + ' tur2 has been registered');
    }

  }
}
