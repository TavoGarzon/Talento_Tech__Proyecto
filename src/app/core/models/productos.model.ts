import { distribuidorInterface } from "../interface/producto.interface";

export class ProductosModel {
  constructor(
    public nombre: string,
    public sku: string,
    public cantidad: number,
    public precio: number,
    public distribuidor: distribuidorInterface,
    public createdAt: Date,
    public usuario: {
      _id: string;
      nombre: string;
      email: string;
    },
    public opiniones?: {
      comentarios: string;
      calificacion: string;
    }
  ) {}
}
