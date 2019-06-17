import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenessService } from 'src/app/services/carga-imageness.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {


  archivos: FileItem[] = [];

  constructor(public _cargaImagenes: CargaImagenessService) { }

  ngOnInit() {
  }


  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

}
