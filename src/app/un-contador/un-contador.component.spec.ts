import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnContadorComponent } from './un-contador.component';

describe('UnContadorComponent', () => {
  let component: UnContadorComponent;
  let fixture: ComponentFixture<UnContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
