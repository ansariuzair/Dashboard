import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TgraphyComponent } from './tgraphy.component';

describe('TgraphyComponent', () => {
  let component: TgraphyComponent;
  let fixture: ComponentFixture<TgraphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TgraphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TgraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
