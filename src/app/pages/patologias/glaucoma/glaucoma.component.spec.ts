import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaucomaComponent } from './glaucoma.component';

describe('GlaucomaComponent', () => {
  let component: GlaucomaComponent;
  let fixture: ComponentFixture<GlaucomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlaucomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlaucomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
