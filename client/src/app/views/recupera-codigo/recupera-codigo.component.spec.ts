import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaCodigoComponent } from './recupera-codigo.component';

describe('RecuperaCodigoComponent', () => {
  let component: RecuperaCodigoComponent;
  let fixture: ComponentFixture<RecuperaCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperaCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperaCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
