import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesprendimientoretinaComponent } from './desprendimientoretina.component';

describe('DesprendimientoretinaComponent', () => {
  let component: DesprendimientoretinaComponent;
  let fixture: ComponentFixture<DesprendimientoretinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesprendimientoretinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesprendimientoretinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
