import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarataComponent } from './catarata.component';

describe('CatarataComponent', () => {
  let component: CatarataComponent;
  let fixture: ComponentFixture<CatarataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatarataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatarataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
