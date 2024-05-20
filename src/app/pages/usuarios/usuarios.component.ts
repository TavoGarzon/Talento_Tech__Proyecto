import { UsuariosService } from './../../services/usuarios/usuarios.service';
import { Component, OnInit, inject } from '@angular/core';
import { usuariosInterface } from '../../core/interface/usuarios.interface';
import { TablaComponent } from '../../componets/tabla/tabla.component';
import { personaInterface } from '../../core/interface/personas.interface';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../core/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacionUser: any;

  UsuariosService = inject(UsuariosService);

  ngOnInit(): void {

    this.UsuariosService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
     
      this.obtenerColumnas(this.usuarios);
    });




  }
  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacionUser(user: any) {
    this.informacionUser = user;

    Swal.fire({
      title: 'usuario Seleccionado',
      imageUrl: 'https://picsum.photos/id/134/200/300',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      html: `
        <ul class="list-goup">
          <li class="list-goup-item text-start">Nombre: </>${user.nombre}</li>
          <li class="list-goup-item text-start">Tipo Documento: ${user.tipoDocumento}</li>
          <li class="list-goup-item text-start">Numero Documento: ${user.numeroDocumento}</li>
          <li class="list-goup-item text-start">Peso: ${user.peso}</li>
          <li class="list-goup-item text-start">Numero Celular: ${user.numeroCelular}</li>
          <li class="list-goup-item text-start">Email: ${user.email}</li>
          <li class="list-goup-item text-start">Fecha de Nacimiento: ${user.fechaNacimiento} </li>
          <li class="list-goup-item text-start">Rol: ${user.rol} </li>
          <li class="list-goup-item text-start">Fecha de Creacion: ${user.createdAt} </li>
        </ul>
             `,
      icon: 'success',
    });
  }
}
