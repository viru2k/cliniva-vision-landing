import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresbiciaComponent } from './presbicia.component';

describe('PresbiciaComponent', () => {
  let component: PresbiciaComponent;
  let fixture: ComponentFixture<PresbiciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresbiciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresbiciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
