import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoEditComponent } from './edit-dep.component';

describe('DepartamentoEditComponent', () => {
  let component: DepartamentoEditComponent;
  let fixture: ComponentFixture<DepartamentoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
