import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrabismoComponent } from './estrabismo.component';

describe('EstrabismoComponent', () => {
  let component: EstrabismoComponent;
  let fixture: ComponentFixture<EstrabismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrabismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrabismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
