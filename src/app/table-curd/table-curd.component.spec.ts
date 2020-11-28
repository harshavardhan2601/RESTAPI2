import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCurdComponent } from './table-curd.component';

describe('TableCurdComponent', () => {
  let component: TableCurdComponent;
  let fixture: ComponentFixture<TableCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
