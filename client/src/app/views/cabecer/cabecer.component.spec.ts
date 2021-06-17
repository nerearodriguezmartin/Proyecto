import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecerComponent } from './cabecer.component';

describe('CabecerComponent', () => {
  let component: CabecerComponent;
  let fixture: ComponentFixture<CabecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
