import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PersonasService } from '../services/personas.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado: any = []

  constructor(private afs: AngularFirestore,private personasService: PersonasService) { }

  ngOnInit(): void {
    this.loadContactos();
  }

  loadContactos(){
    this.listado = this.personasService.getListaContactos()
  }



}
