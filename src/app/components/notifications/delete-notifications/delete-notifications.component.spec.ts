import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotificationsComponent } from './delete-notifications.component';

describe('DeleteNotificationsComponent', () => {
  let component: DeleteNotificationsComponent;
  let fixture: ComponentFixture<DeleteNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNotificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
