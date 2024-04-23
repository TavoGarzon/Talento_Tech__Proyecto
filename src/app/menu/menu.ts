import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from './../core/interface/menu_info_interface';
export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'https://fontawesome.com/icons/house?f=classic&s=solid',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.PERSONA,
    title: 'Personas',
    icon: '',
    classCss: '',
    subMenu: [
      {
        path: PATH.IMAGEN,
        title: 'Imagenes',
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

