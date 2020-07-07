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


  getAll(specialitate: string, data: string) {
    return this.db.list('/' + specialitate + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, available: a.payload.val()['liber'] })))
    );
  }

  getAllForAdmin(specialitate: string, data: string) {

    return this.db.list('/' + specialitate + '/' + data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() as {} })))
    );
  }
}
