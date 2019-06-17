import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenessService {

  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {

  }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log(imagenes);

  }

  private guardarImagen(imagen: any) {
    this.db.collection(`${this.CARPETA_IMAGENES}`).add(imagen);
  }

}
