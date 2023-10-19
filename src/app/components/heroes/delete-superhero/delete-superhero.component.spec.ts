import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuperheroComponent } from './delete-superhero.component';

describe('DeleteSuperheroComponent', () => {
  let component: DeleteSuperheroComponent;
  let fixture: ComponentFixture<DeleteSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSuperheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
