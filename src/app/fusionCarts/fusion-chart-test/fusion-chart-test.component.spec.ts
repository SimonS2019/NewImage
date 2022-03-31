import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionChartTestComponent } from './fusion-chart-test.component';

describe('FusionChartTestComponent', () => {
  let component: FusionChartTestComponent;
  let fixture: ComponentFixture<FusionChartTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionChartTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionChartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
