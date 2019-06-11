import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHandlerComponent } from './transaction-handler.component';

describe('TransactionHandlerComponent', () => {
  let component: TransactionHandlerComponent;
  let fixture: ComponentFixture<TransactionHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
