import { Component, OnInit } from '@angular/core';
import { usuariosInterface } from '../../core/interface/usuarios.interface';
import { TablaComponent } from '../../componets/tabla/tabla.component';
import { personaInterface } from '../../core/interface/personas.interface';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: usuariosInterface[] = [];
  columnas: string[] = [];

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Gustavo Adolfo Garzon Bermudez',
        fechaNacimiento: new Date('1988-08-09'),
        peso: '142kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroDocumento: '1072648520',
        numeroCelular: 3014551329,
        email: 'tavo_gar88@hotmail.com',
      },
      {
        nombre: 'Gina Tatiana Mahecha Veloza',
        fechaNacimiento: new Date('1993-11-02'),
        peso: '100kg',
        tipoDocumento: 'Cedula de Ciudadania',
        numeroDocumento: '1010211343',
        numeroCelular: 3108041653,
        email: 'tatis_93_@hotmail.com',
      },
      {
        nombre: 'Lia Guadalupe Garzon Mahecha',
        fechaNacimiento: new Date('2020-07-14'),
        peso: '52kg',
        tipoDocumento: 'Registro Civil',
        numeroDocumento: '1025566134',
        numeroCelular: 3014551329,
        email: 'tavo_gar88@hotmail.com',
      },
      {
        nombre: 'Luna Isabel Garzon Mahecha',
        fechaNacimiento: new Date('2023-10-16'),
        peso: '32kg',
        tipoDocumento: 'Registro Civil',
        numeroDocumento: '1243766503',
        numeroCelular: 3014551329,
        email: 'tavo_gar88@hotmail.com',
      },
    ];
    console.log('Lista en el componente usuarios', this.usuarios);

    this.obtenerColumnas(this.usuarios);
  }
  obtenerColumnas(usuarios: personaInterface[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }
}
