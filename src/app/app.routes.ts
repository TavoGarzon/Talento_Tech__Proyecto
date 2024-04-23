import { Routes } from '@angular/router';
import { PersonasComponent } from './pages/personas/personas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


export const routes: Routes = [

  {
    path:'inicio',
    title: 'Home',
    children: [
      //Path por defecto del path padre
      {
        path:'',
        title:'Home',
        component: InicioComponent
      },
      {
        path:'personas',
        title: 'Personas',
        component: PersonasComponent,
      },
      {
        path:'imagenes',
        title: 'Imagenes',
        component: ImagenesComponent,
      },
      {
        path:'acercade',
        title: '¿Quienes Somos?',
        component: AcercaDeComponent,
      },
      {
        path:'contacto',
        title: 'Contacto',
        component: ContactoComponent,
      },
      {
        path:'articulo',
        title: 'Articulo',
        component: ArticuloComponent,
      },


    ]
  },



];
