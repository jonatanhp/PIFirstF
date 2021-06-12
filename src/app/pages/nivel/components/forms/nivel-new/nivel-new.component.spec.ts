import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelNewComponent } from './nivel-new.component';

describe('NivelNewComponent', () => {
  let component: NivelNewComponent;
  let fixture: ComponentFixture<NivelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
