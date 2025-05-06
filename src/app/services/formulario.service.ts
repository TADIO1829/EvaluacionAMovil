import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc, collectionData, query, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  constructor(private afs: AngularFirestore) {} 
  enviarFormulario(data: any) {
    return this.afs.collection('formularios').add({
      ...data,
      createdAt: new Date()
    }).catch(error => {
      console.error('Error al enviar el formulario:', error);
      throw error;
    });
  }
}
