import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GenerarReactivo } from '../generar-reactivo/generar-reactivo.component';
import { ListarReactivos } from '../listar-reactivos/listar-reactivos.component';


@Component({
  selector: 'app-troncal',
  templateUrl: './troncal.component.html',
  styleUrls: ['./troncal.component.css'],
  imports: [
    MatCardModule,
    MatButtonModule,
    GenerarReactivo,
    ListarReactivos
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TroncalComponent {
  @ViewChild(ListarReactivos) listar!: ListarReactivos;


  constructor() {

  }

  actualizarDatos() {
    this.listar.listarReactivivos(); // Llama al método del componente hijo para obtener datos actualizados
  }

}
