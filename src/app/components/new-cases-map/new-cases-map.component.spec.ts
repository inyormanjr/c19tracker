import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCasesMapComponent } from './new-cases-map.component';

describe('NewCasesMapComponent', () => {
  let component: NewCasesMapComponent;
  let fixture: ComponentFixture<NewCasesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCasesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCasesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
