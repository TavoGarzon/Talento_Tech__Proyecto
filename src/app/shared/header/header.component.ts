import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuItems: any[] = [];
menu: any;

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
    console.log(this.menuItems);
    //throw new Error('Method not implemented.');
  }
}
