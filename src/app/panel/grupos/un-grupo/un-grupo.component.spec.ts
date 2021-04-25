import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnGrupoComponent } from './un-grupo.component';

describe('UnGrupoComponent', () => {
  let component: UnGrupoComponent;
  let fixture: ComponentFixture<UnGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
