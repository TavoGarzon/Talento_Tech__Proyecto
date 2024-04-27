import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-agregar-tarea.component.html',
  styleUrl: './formulario-agregar-tarea.component.css',
})
export class FormularioAgregarTareaComponent {
  descripcion: string = '';
  asignadoA: string = '';
  fechaTerminacion: string = '';

  @Output() tareaAgregada = new EventEmitter<{
    descripcion: string;
    asignadoA: string;
    fechaTerminacion: string;
  }>();

  agregarTarea() {
    if (
      this.descripcion.trim() !== '' &&
      this.asignadoA.trim() !== '' &&
      this.fechaTerminacion.trim() !== ''
    ) {
      const nuevaTarea = {
        descripcion: this.descripcion,
        asignadoA: this.asignadoA,
        fechaTerminacion: this.fechaTerminacion,
      };
      this.tareaAgregada.emit(nuevaTarea);
      this.descripcion = '';
      this.asignadoA = '';
      this.fechaTerminacion = '';
    }
  }
}
