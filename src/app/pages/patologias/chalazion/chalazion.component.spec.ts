import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalazionComponent } from './chalazion.component';

describe('ChalazionComponent', () => {
  let component: ChalazionComponent;
  let fixture: ComponentFixture<ChalazionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalazionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalazionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
