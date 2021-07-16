import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionNewComponent } from './seccion-new.component';

describe('SeccionNewComponent', () => {
  let component: SeccionNewComponent;
  let fixture: ComponentFixture<SeccionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
