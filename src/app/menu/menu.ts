import { UsuariosComponent } from './../pages/usuarios/usuarios.component';
/*import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from './../core/interface/menu_info_interface';
export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: '<i class="fa-solid fa-dragon"></i>',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PERSONA,
    title: 'Persona',
    icon: '',
    classCss: '',
    subMenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen',
        icon: '',
        classCss: '',
        subMenu: [],
      },
      {
        path: PATH.ACERCADE,
        title: 'Acercade',
        icon: '',
        classCss: '',
        subMenu: [],
      },
    ],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagenes',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: '¿Quines Somos?',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: '',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.ARTICULO,
    title: 'Articulo',
    icon: '',
    classCss: '',
    subMenu: [],
  },
];
*/
import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info_interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-solid fa-igloo',
    classCss: '',
    subMenu: [],
  },

  {
    path: PATH.PERSONA,
    title: 'Persona',
    icon: 'fa-solid fa-people-roof',
    classCss: '',
    subMenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagen',
        icon: 'fa-solid fa-panorama',
        classCss: '',
        subMenu: [],
      },
      {
        path: PATH.ARTICULO,
        title: 'Articulo',
        icon: 'fa-solid fa-newspaper',
        classCss: '',
        subMenu: [
          {
            path: PATH.ARTICULO,
            title: 'Articulo',
            icon: 'fa-solid fa-newspaper',
            classCss: '',
            subMenu: [],
          },
        ],
      },
    ],
  },
  {
    path: PATH.IMAGEN,
    title: 'Imagen',
    icon: 'fa-solid fa-panorama',
    classCss: '',
    subMenu: [],
  },

  {
    path: PATH.ARTICULO,
    title: 'Articulo',
    icon: 'fa-solid fa-newspaper',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: 'fa-solid fa-hand-holding-hand',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: 'Acerca De Nosotros',
    icon: 'fa-solid fa-address-book',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.USUARIOS,
    title: 'Usuarios',
    icon: 'fa-solid fa-person-chalkboard',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PRODUCTOS,
    title: 'Ver Productos',
    icon: 'fa-solid fa-person-booth',
    classCss: '',
    subMenu: [],
  },
  // {
  //   path: PATH.CREAR_PRODUCTOS,
  //   title: 'Crear Productos',
  //   icon: 'fa-solid fa-person-booth',
  //   classCss: '',
  //   subMenu: [],
  // },

  {
    path: PATH.TAREAS,
    title: 'Ver Tareas',
    icon: 'fa-solid fa-list',
    classCss: '',
    subMenu: [],
  },
];
