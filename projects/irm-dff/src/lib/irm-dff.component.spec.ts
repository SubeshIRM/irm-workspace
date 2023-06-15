import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmDffComponent } from './irm-dff.component';

describe('IrmDffComponent', () => {
  let component: IrmDffComponent;
  let fixture: ComponentFixture<IrmDffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrmDffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrmDffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
