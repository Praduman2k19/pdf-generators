import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWorksheetComponent } from './open-worksheet.component';

describe('OpenWorksheetComponent', () => {
  let component: OpenWorksheetComponent;
  let fixture: ComponentFixture<OpenWorksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenWorksheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWorksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
