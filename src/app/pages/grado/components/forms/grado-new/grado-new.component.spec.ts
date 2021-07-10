import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoNewComponent } from './grado-new.component';

describe('GradoNewComponent', () => {
  let component: GradoNewComponent;
  let fixture: ComponentFixture<GradoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
