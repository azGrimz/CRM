import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddContainerComponent } from './modal-add-container.component';

describe('ModalAddContainerComponent', () => {
  let component: ModalAddContainerComponent;
  let fixture: ComponentFixture<ModalAddContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAddContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
