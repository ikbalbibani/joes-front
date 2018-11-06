import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierAdminComponent } from './dossier-admin.component';

describe('DossierAdminComponent', () => {
  let component: DossierAdminComponent;
  let fixture: ComponentFixture<DossierAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossierAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
