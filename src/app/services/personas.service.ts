import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private afs: AngularFirestore) { }
  async getListaContactos(){
    const refContactos = this.afs.collection("personas")
    return refContactos.valueChanges()
  }
}
//Prueba