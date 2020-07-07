import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) {

  }

  saveAppointment(specialitate, data, ora, indentitate) {
    this.db.object('/' + specialitate + '/' + data + '/' + ora + '/').valueChanges().subscribe(
      result => {
        if (result['liber'])
          this.db.object('/' + specialitate + '/' + data + '/' + ora + '/').update({
            liber: false,
            nume: indentitate['nume'],
            prenume: indentitate['prenume'],
            email: indentitate['email'],
          });
      }
    )
  }


  getAll(specialitate: string, tur: number, data: string) {
    // returns only the time and the field which indicates if that specific time is available or not. ['liber']
    return this.db.list('/' + specialitate + '/' + tur + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, available: a.payload.val()['liber'] })))
    );
  }

  getAllForAdmin(specialitate: string, tur: number, data: string) {
    // returns the entire time object, including data about registered user like idnp, email etc.
    return this.db.list('/' + specialitate + '/' + tur + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() as {} })))
    );
  }
}
