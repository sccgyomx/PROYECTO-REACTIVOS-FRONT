import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Reactivo } from 'src/app/application/models/reactivo.interface';
import { MatRadioModule } from '@angular/material/radio';
import { OpcionMultipleReactivo } from 'src/app/application/models/opcion.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-reactivo',
    templateUrl: './detail-reactivo.component.html',
    styleUrls: ['./detail-reactivo.component.css'],
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatRadioModule,
        CommonModule
    ],
})

export class DetailReactivo implements OnInit {

    @Input() reactivo!: Reactivo;
    @Output() mensaje = new EventEmitter<string>()
    @Input() soloMostrar!: boolean
    opciones: OpcionMultipleReactivo[] = [];

    constructor() {
    }

    ngOnInit() {
        this.opciones = this.reactivo.opciones
    }

    clickCerrar() {
        this.mensaje.emit("primero")
    }
}