import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { switchMap, tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class RessearchService {
  constructor(private afs: AngularFirestore) {}
  getMovies(start: BehaviorSubject<string>): Observable<any[]> {
  return  start.pipe(
    tap(startText => {
      console.log(startText);
    }),
    switchMap(startText => {
      const endText = startText + '\uf8ff';
        // return of([{Title:'Booyea',Plot:'dance'}]);
        return this.afs
          .collection('rests', ref =>
            ref
              .orderBy('name')
              .limit(10)
              .startAt(startText)
              .endAt(endText)
          )
          .snapshotChanges()

    }),
    map(changes => {
      return changes.map(c => {
        console.log(c);
        const data = c.payload.doc.data();
        const id = c.payload.doc.id;
        return { id, ...data };
      });
    }),
      tap(startText => {
        console.log(startText);
      })
    );

  }
}
