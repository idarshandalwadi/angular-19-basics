import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTypesComponent } from './signal-types.component';

describe('SignalTypesComponent', () => {
  let component: SignalTypesComponent;
  let fixture: ComponentFixture<SignalTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
