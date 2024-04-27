import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarTareaComponent } from './formulario-agregar-tarea.component';

describe('FormularioAgregarTareaComponent', () => {
  let component: FormularioAgregarTareaComponent;
  let fixture: ComponentFixture<FormularioAgregarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAgregarTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioAgregarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
