import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoacadastroComponent } from './pessoacadastro.component';

describe('PessoacadastroComponent', () => {
  let component: PessoacadastroComponent;
  let fixture: ComponentFixture<PessoacadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoacadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
