import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenteComponent } from './lente.component';

describe('LenteComponent', () => {
  let component: LenteComponent;
  let fixture: ComponentFixture<LenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
