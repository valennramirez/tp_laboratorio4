import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPageComponent } from './editar-page.component';

describe('EditarPageComponent', () => {
  let component: EditarPageComponent;
  let fixture: ComponentFixture<EditarPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPageComponent]
    });
    fixture = TestBed.createComponent(EditarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
