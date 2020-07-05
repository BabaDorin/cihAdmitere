import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) { 

  }

  getAll(specialitate:string, data:string){
    return this.db.list('/'+specialitate+'/'+data).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, available: a.payload.val()['liber']})))
    );
  }

  getAllForAdmin(){

    return this.db.list('/{{specialitate}}/{{data}}').snapshotChanges().pipe(
      map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() as {}})))
    );
  }
}
