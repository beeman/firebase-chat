import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsIndexComponent } from './rooms-index.component';

describe('RoomsIndexComponent', () => {
  let component: RoomsIndexComponent;
  let fixture: ComponentFixture<RoomsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
