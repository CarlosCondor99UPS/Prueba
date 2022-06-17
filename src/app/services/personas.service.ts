import { Serializer } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private afs: AngularFirestore) { }
  getListaContactos(): Observable<any>{
    const refContactos = this.afs.collection("personas")
    return refContactos.valueChanges()
  }
}
//Prueba