import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentText } from './component-text';

describe('ComponentText', () => {
  let component: ComponentText;
  let fixture: ComponentFixture<ComponentText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
