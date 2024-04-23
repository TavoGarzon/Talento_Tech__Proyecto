import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  mostrarTitulo: boolean = true;

   personas= [
    {
      nombre : 'Tatiana',
      edad: 30,
      ciudad: 'Villavicencio',
      documento: 1010211343,
    },
    {
      nombre : 'Guadalupe',
      edad: 4,
      ciudad: 'Bogota/Villavicencio',
      documento: 1025566134,
    },
    {
      nombre : 'Luna',
      edad: 0.5,
      ciudad: 'Bogota/Villavicencio',
      documento: 1243766305,
    },
    {
      nombre : 'Gustavo',
      edad: 35,
      ciudad: 'Bogota',
      documento: 1072648520,
    },{
      nombre : 'Tatiana',
      edad: 30,
      ciudad: 'Villavicencio',
      documento: 1010211343,
    },
    {
      nombre : 'Guadalupe',
      edad: 4,
      ciudad: 'Bogota/Villavicencio',
      documento: 1025566134,
    },
    {
      nombre : 'Luna',
      edad: 0.5,
      ciudad: 'Bogota/Villavicencio',
      documento: 1243766305,
    },
    {
      nombre : 'Gustavo',
      edad: 35,
      ciudad: 'Bogota',
      documento: 1072648520,
    }

  ];


  constructor(private router: Router) {}

cambioRuta(){
  this.router.navigateByUrl('/personas')
}

abriModal(){
  Swal.fire({
    title: 'Como estas!',
    text: 'Gracias por ingresar!',
    icon: 'success',
  });
}
}
