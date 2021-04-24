import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjNgIfComponent } from './ej-ng-if.component';

describe('EjNgIfComponent', () => {
  let component: EjNgIfComponent;
  let fixture: ComponentFixture<EjNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
