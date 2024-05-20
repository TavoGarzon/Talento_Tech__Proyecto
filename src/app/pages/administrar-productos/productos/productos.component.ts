import { ProductosService } from '../../../services/productos/productos.service';
import { Component, OnInit, inject } from '@angular/core';
import { TablaComponent } from '../../../componets/tabla/tabla.component';
import { ProductoInterface } from '../../../core/interface/producto.interface';
import Swal from 'sweetalert2';
import { ProductosModel } from '../../../core/models/productos.model';
import { Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  productos: ProductosModel[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: ProductosModel | undefined;

  private ProductosService = inject(ProductosService);
  private router =inject(Router);

  ngOnInit(): void {
    this.ProductosService.getProductos().subscribe(
      (productos: ProductosModel[]) => {
        this.productos = productos;
        this.misProductos = productos.map((producto) =>
          this.resumenProducto(producto)
        );

        this.obtenerColumnas(this.misProductos);
      }
    );
  }

  resumenProducto(producto: ProductosModel): ProductoInterface {
    return {
      nombre: producto.nombre,
      sku: producto.sku,
      cantidad: producto.cantidad,
      precio: producto.precio,
      createdAt: producto.createdAt,
    };
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: ProductoInterface) {
    this.informacion = this.productos.find(
      (producto) => producto.sku === data.sku
    );

    if (this.informacion) {
      Swal.fire({
        title: 'Producto Seleccionado',
        imageUrl: 'https://picsum.photos/id/130/200/300',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
        html: `
        <ul class="list-goup">
          <li class="list-goup-item text-start"><B>Nombre:</B> ${this.informacion.nombre}</li>
          <li class="list-goup-item text-start"><B>Codigo:</B> ${this.informacion.sku}</li>
          <li class="list-goup-item text-start"><B>Cantidad:</B> ${this.informacion.cantidad}</li>
          <li class="list-goup-item text-start"><B>Precio:</B> ${this.informacion.precio}</li>
          <li class="list-goup-item text-start"><B>Distribuidor:</B> ${this.informacion.distribuidor.razonSocial}</li>
          <li class="list-goup-item text-start"><B>Direccion del Distribuidor:</B> ${this.informacion.distribuidor.direccion}</li>
          <li class="list-goup-item text-start"><B>Telefono del Distribuidor:</B> ${this.informacion.distribuidor.telefono}</li>
          <li class="list-goup-item text-start"><B>Usuario que Registro:</B> ${this.informacion.usuario.nombre}</li>
          <li class="list-goup-item text-start"><B>Correo Usuario:</B> ${this.informacion.usuario.email}</li>
          <li class="list-goup-item text-start"><B>Comentarios:</B> ${this.informacion.opiniones?.comentarios}</li>
          <li class="list-goup-item text-start"><B>Calificacion:</B> ${this.informacion.opiniones?.calificacion}</li>


        </ul>
             `,
        icon: 'success',
      });
    }
  }

  crearProductos(){
    this.router.navigateByUrl(`${PATH.CREAR_PRODUCTOS}`);
  }
}
