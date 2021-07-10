import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoEditComponent } from './grado-edit.component';

describe('GradoEditComponent', () => {
  let component: GradoEditComponent;
  let fixture: ComponentFixture<GradoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
