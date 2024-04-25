import { DatePipe } from '@angular/common';
import { personaInterface } from '../../core/interface/personas.interface';
import { PersonasComponent } from './../../pages/personas/personas.component';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  @Input() personas: personaInterface[] = [];
  @Input() titulo: string = " ";

  ngOnInit(): void {
    console.log('Personas en el componente Hijo', this.personas);
  }
}
