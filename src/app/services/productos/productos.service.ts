import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosModel } from '../../core/models/productos.model';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { crearProductoInterface } from '../../core/interface/producto.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private httClient: HttpClient) {}

  getProductos() {
    return this.httClient
    .get<{ ok: boolean; producto: ProductosModel[]}>(`${base_url}/producto`)
    .pipe(map((respuesta) => respuesta.producto));
  }

  crearProductos(producto: crearProductoInterface){
    return this.httClient.post(`${base_url}/producto`,producto);
  }
}


