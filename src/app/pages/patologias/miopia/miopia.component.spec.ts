import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiopiaComponent } from './miopia.component';

describe('MiopiaComponent', () => {
  let component: MiopiaComponent;
  let fixture: ComponentFixture<MiopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
