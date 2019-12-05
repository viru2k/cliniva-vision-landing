import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetinopatiadiabeticaComponent } from './retinopatiadiabetica.component';

describe('RetinopatiadiabeticaComponent', () => {
  let component: RetinopatiadiabeticaComponent;
  let fixture: ComponentFixture<RetinopatiadiabeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetinopatiadiabeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetinopatiadiabeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
