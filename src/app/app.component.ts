
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ArticuloComponent } from "./pages/articulo/articulo.component";
import { PersonasComponent } from "./pages/personas/personas.component";
import { ImagenesComponent } from "./pages/imagenes/imagenes.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, ArticuloComponent, PersonasComponent, ImagenesComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyecto-clase';

  nombre: string ='Gustavo Adolfo Garzon Bermudez';
  edad: number = 35;
}
