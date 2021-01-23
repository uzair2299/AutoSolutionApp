import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManufacturerComponent } from './vehicle-manufacturer.component';

describe('VehicleManufacturerComponent', () => {
  let component: VehicleManufacturerComponent;
  let fixture: ComponentFixture<VehicleManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
