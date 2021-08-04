import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorksheetComponent } from './view-worksheet.component';

describe('ViewWorksheetComponent', () => {
  let component: ViewWorksheetComponent;
  let fixture: ComponentFixture<ViewWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
