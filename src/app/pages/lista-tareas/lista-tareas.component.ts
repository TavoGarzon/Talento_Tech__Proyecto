import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAgregarTareaComponent } from '../../componets/formulario-agregar-tarea/formulario-agregar-tarea.component';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [FormularioAgregarTareaComponent,CommonModule],
})
export class ListaTareasComponent {
  tareas: { descripcion: string; asignadoA: string; fechaTerminacion: string; }[] = [];

  agregarTarea(nuevaTarea: { descripcion: string; asignadoA: string; fechaTerminacion: string; }) {
    this.tareas.push(nuevaTarea);
    // Ordenar las tareas por fecha de terminación en forma descendente
    this.tareas.sort((a, b) => {
      const fechaA = new Date(a.fechaTerminacion).getTime();
      const fechaB = new Date(b.fechaTerminacion).getTime();
      return fechaA - fechaB;
    });
  }
}
