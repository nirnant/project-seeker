import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadcotationComponent } from './uploadcotation.component';

describe('UploadcotationComponent', () => {
  let component: UploadcotationComponent;
  let fixture: ComponentFixture<UploadcotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadcotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadcotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
