export interface MenuInfo{
  path:string;
  title: string;
  icon?:string;
  classCss?:string;
  subMenu?:MenuInfo[];
 }
