import { DatePipe } from '@angular/common';
import { personaInterface } from '../../core/interface/personas.interface';
import { PersonasComponent } from './../../pages/personas/personas.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  @Output() onInformacion: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    //this.columnas.push("acciones");
    console.log('Personas en el componente hijo', this.data);
  }

  formatearNombreDeColumnas(columna: string): string {
    // Dividir el nombre por mayúsculas y unir con espacios
    return columna.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleUpperCase();
  }

  isFecha(value: any): boolean {
    return value instanceof Date;
  }

  enviarInformacion(data: any) {
    console.log('data componente hijo', data);
    //Emite el evento con la infomracion de DATA
    this.onInformacion.emit(data);
    
  }


}
