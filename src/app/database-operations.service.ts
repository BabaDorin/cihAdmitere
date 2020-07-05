import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {

  specialitati;
  data; ore;

  constructor(private db: AngularFireDatabase) { 

  }



  init(){
    // Generates objects as following
    // ♦ specialitate
    // |--data1
    //     |--ora
    //        |--nume
    //        |--prenume
    //        |--liber (da / nu)
    
    // for users get only [ora] and [liber]
    // for admins - get the entire object


    this.specialitati = [
      'contabilitate',
      'papp',
      'ecologie',
      'aaw',
      'invatamantPrimar'
    ];

    this.data=[
      '13iulie', '14iulie',
      '15iulie', '16iulie',
      '17iulie', 
      
      '20iulie',
      '21iulie', '22iulie',
      '23iulie', '24iulie',

      '27iulie', '28iulie',
      '29iulie', '30iulie',
      '31iulie', 
    ];

    this.ore=[
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

    for(let sp in this.specialitati){
      for(let d in this.data){
        for(let o in this.ore){
          specialitate = this.specialitati[sp];
          data = this.data[d];
          ora = this.ore[o];

          this.db.database.ref().child('/'+ specialitate+'/'+data+'/'+ora+'/').set({
            nume: '',
            prenume: '',
            liber: true
          });
        }
      }
      console.log(specialitate + ' done');
    }
  }
}
