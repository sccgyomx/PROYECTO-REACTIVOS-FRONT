import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactivoService } from 'src/app/services/reactivo.service';
import { generateNewQuestion } from 'src/app/environment/enviroment';
import { Message } from './constantes';
import { DetailReactivo } from '../detail-reactivo/detail-reactivo.component';
import { Reactivo } from 'src/app/application/models/reactivo.interface';

@Component({
    selector: 'app-generar-reactivo',
    templateUrl: './generar-reactivo.component.html',
    styleUrls: ['./generar-reactivo.component.css'],
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule,
        MatInputModule,
        MatFormFieldModule,

        ReactiveFormsModule,
        DetailReactivo
    ],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GenerarReactivo {
    @Output() actualizarLista = new EventEmitter<boolean>();
    visible = "primero"
    tema = new FormControl('', [Validators.required, Validators.minLength(10)])
    reactivo!: Reactivo;
    // se utiliza para avisar a DetailReactivo que no se va a editar la informacion que muestra
    editar = false

    constructor(private reactivoService: ReactivoService) { }

    setVisibleCard(card: string) {
        switch (card) {
            case "primero":
                this.visible = card
                this.actualizarLista.emit(true)
                break
            case "segundo":
                this.visible = card
                break
            case "tercero":
                if (this.tema.valid) {
                    this.visible = card
                    const promp = {
                        message: Message.replace("$remplazar", this.tema.value!)
                    }
                    this.reactivoService.post(generateNewQuestion, promp).subscribe((res) => {
                        this.reactivo = res
                        this.visible = "cuarto"
                        this.tema.reset()

                    })
                } else {
                    this.tema.markAllAsTouched();
                }
                break
        }
    }

    getErrorMessage() {
        if (this.tema.hasError('required')) {
            return 'Debes ingresar un tema';
        }

        if (this.tema.value!.length < 10) {

            return "Debe tener por lo menos 20 caracteres"
        }

        return 'Datos invalidos';
    }
}


