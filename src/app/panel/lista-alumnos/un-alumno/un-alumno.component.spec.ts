import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAlumnoComponent } from './un-alumno.component';

describe('UnAlumnoComponent', () => {
  let component: UnAlumnoComponent;
  let fixture: ComponentFixture<UnAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
