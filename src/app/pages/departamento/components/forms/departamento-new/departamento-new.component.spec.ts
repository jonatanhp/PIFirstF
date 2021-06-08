import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoNewComponent } from './departamento-new.component';

describe('DepartamentoNewComponent', () => {
  let component: DepartamentoNewComponent;
  let fixture: ComponentFixture<DepartamentoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
