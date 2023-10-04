import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Reactivo } from 'src/app/application/models/reactivo.interface';
import { ReactivoService } from 'src/app/services/reactivo.service';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonModule } from '@angular/common';

import { DetailReactivo } from '../detail-reactivo/detail-reactivo.component';
import { listAllQuestions } from 'src/app/environment/enviroment';

@Component({
  selector: 'app-listar-reactivos',
  templateUrl: './listar-reactivos.component.html',
  styleUrls: ['./listar-reactivos.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    DetailReactivo
  ],
})

export class ListarReactivos implements OnInit {
  respuesta: Observable<Reactivo[]>;
  data: Reactivo[] = []

  constructor(private reactivo: ReactivoService) {
    this.respuesta = this.reactivo.get(listAllQuestions)
  }


  ngOnInit() {
    this.listarReactivivos()
  }

  listarReactivivos() {
    let promesa = this.respuesta.subscribe((res) => {
      this.data = res
      promesa.unsubscribe()
    })
  }

}