import { personaInterface } from './../../core/interface/personas.interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from '../../componets/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  standalone: true,
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  imports: [CommonModule, TablaComponent],
})
export class PersonasComponent {
  personas: personaInterface[] = [];
  tituloNombre: string = 'Lista de Personas';
  columnas: string[] = [];
  informacionPersona: any;

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Gustavo Garzon',
        fechaNacimiento: new Date('1988-08-09'),
        peso: '142kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroDocumento: '1072648520',
        numeroCelular: 3014551329,
        email: 'tavo_Gar88@hotmail.com',
      },
      {
        nombre: 'Tatiana Mahecha',
        fechaNacimiento: new Date('1993-11-02'),
        peso: '100kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroDocumento: '1010211343',
        numeroCelular: 3108041653,
        email: 'tatis_93_@hotmail.com',
      },
      {
        nombre: 'Guadalupe Garzon',
        fechaNacimiento: new Date('2020-07-14'),
        peso: '52kg',
        tipoDocumento: 'Registro Civil',
        numeroDocumento: '1025566134',
        numeroCelular: 3014551329,
        email: 'tavo_Gar88@hotmail.com',
      },
      {
        nombre: 'Luna Isabel Garzon',
        fechaNacimiento: new Date('2023-10-16'),
        peso: '32kg',
        tipoDocumento: 'Registro Civil',
        numeroDocumento: '1243766503',
        numeroCelular: 3014551329,
        email: 'tavo_Gar88@hotmail.com',
      },
    ];
      this.obtenerColumnas(this.personas);
  }
  obtenerColumnas(personas: personaInterface[]) {
    if (personas.length > 0) {
      this.columnas = Object.keys(personas[0]);
    }
  }

  recibirInformacionPers(person: any) {
    this.informacionPersona = person;
   
    Swal.fire({
      title: 'Persona Seleccionada',
      imageUrl: 'https://picsum.photos/id/124/200/300',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      html: `
        <ul class="list-goup">
          <li class="list-goup-item text-start">Nombre: </>${person.nombre}</li>
          <li class="list-goup-item text-start">Tipo Documento: ${person.tipoDocumento}</li>
          <li class="list-goup-item text-start">Numero Documento: ${person.numeroDocumento}</li>
          <li class="list-goup-item text-start">Peso: ${person.peso}</li>
          <li class="list-goup-item text-start">Numero Celular: ${person.numeroCelular}</li>
          <li class="list-goup-item text-start">Email: ${person.email}</li>
          <li class="list-goup-item text-start">Fecha de Nacimiento: ${person.fechaNacimiento}</li>
        </ul>
             `,
      icon: 'success',
    });
  }
}
