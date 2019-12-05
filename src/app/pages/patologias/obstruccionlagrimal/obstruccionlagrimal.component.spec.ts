import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstruccionlagrimalComponent } from './obstruccionlagrimal.component';

describe('ObstruccionlagrimalComponent', () => {
  let component: ObstruccionlagrimalComponent;
  let fixture: ComponentFixture<ObstruccionlagrimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstruccionlagrimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstruccionlagrimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
