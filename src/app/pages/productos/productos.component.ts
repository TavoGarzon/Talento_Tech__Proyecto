import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../componets/tabla/tabla.component';
import { ProductoInterface } from '../../core/interface/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: any;

  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'San Andres',
        sku: 'P8795',
        cantidad: 15,
        precio: 45000,
      },
      {
        nombre: 'Eje Cafetero',
        sku: 'Ch4795',
        cantidad: 51,
        precio: 10000,
      },
      {
        nombre: 'Islas del Rosario',
        sku: 'Ca744',
        cantidad: 41,
        precio: 39900,
      },
    ];

    this.obtenerColumnas(this.misProductos);
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: any){
    this.informacion = data;
    console.log('componente padre', this.informacion)
    Swal.fire({
      title: 'Producto Seleccionado',
      imageUrl: 'https://picsum.photos/id/130/200/300',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      html: `
        <ul class="list-goup">
          <li class="list-goup-item text-start">Nombre: </>${data.nombre}</li>
          <li class="list-goup-item text-start">Codigo: ${data.sku}</li>
          <li class="list-goup-item text-start">Cantidad: ${data.cantidad}</li>
          <li class="list-goup-item text-start">Precio: ${data.precio}</li>
        </ul>
             `,
      icon: 'success',
    });
  }



}
