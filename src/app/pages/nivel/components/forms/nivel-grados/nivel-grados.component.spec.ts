import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelGradosComponent } from './nivel-grados.component';

describe('NivelGradosComponent', () => {
  let component: NivelGradosComponent;
  let fixture: ComponentFixture<NivelGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelGradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
