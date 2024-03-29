import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) {

  }

  saveAppointment(specialitate, tur, data, ora, identitate) {
    //
    // It updates the appointment object from the db, setting it's 'liber' property to false
    // and adding some additional fields like nume, prenume etc. 
    // returns true if the appointment has been saved and everything in oke.
    // 
    let queryPath = '/' + specialitate + '/tur' + tur + '/' + data + '/' + ora + '/'; 

    return this.db.object(queryPath).valueChanges().pipe(take(1)).subscribe(
      result => {
        if(result['liber']){
          this.db.object(queryPath).update({
                liber: false,
                nume: identitate.nume,
                prenume: identitate.prenume,
                email: identitate.email,
                idnp: identitate.idnp,
                telefon: identitate.telefon
              });
          return true;
        }
        else alert('Acea data si ora este deja ocupata.');
        return false;
      }
    )
  }

  getAll(specialitate: string, tur: number, data: string) {
    // returns only the time and the field which indicates if that specific time is available or not. ['liber']
    return this.db.list('/' + specialitate + '/tur' + tur + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, available: a.payload.val()['liber'] })))
    );
  }

  getAllForAdmin(specialitate: string, tur: number, data: string) {
    // returns the entire time object, including data about registered user like idnp, email etc.
    return this.db.list('/' + specialitate + '/tur' + tur + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() as {} })))
    );
  }
}
