import { Routes } from '@angular/router';
import { PersonasComponent } from './pages/personas/personas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PATH } from './core/enum/path.enum';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


export const routes: Routes = [
  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      //Path por defecto del path padre
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.PERSONA,
        title: 'Personas',
        component: PersonasComponent,
      },
      {
        path: PATH.IMAGEN,
        title: 'Imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.ACERCADE,
        title: '¿Quienes Somos?',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACTO,
        title: 'Contacto',
        component: ContactoComponent,
      },
      {
        path: PATH.ARTICULO,
        title: 'Articulo',
        component: ArticuloComponent,
      },
      {
        path: PATH.USUARIOS,
        title: 'Usuarios',
        component: UsuariosComponent,
      },
    ],
  },
];
