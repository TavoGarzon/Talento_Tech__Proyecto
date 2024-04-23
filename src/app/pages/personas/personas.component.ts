import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas',
  standalone: true,
 // imports: [],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  imports: [CommonModule]
})
export class PersonasComponent {

  nombres: string[] = ['Juan Perez', 'María Maldonado', 'Pedro Cuesta', 'Ana Garzon', 'Luis Pernia','Gustavo Garcia'];

}
