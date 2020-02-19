import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;
  let componentDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TemplateDrivenFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    componentDe = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fakeAsync should have field1 "field 1" on the input field initially ', fakeAsync(() => {
    // console.log(component.field1);
    component.field1 = 'field 2';
    const nameDe = componentDe.query(By.css('.field1'));
    // const field = fixture.nativeElement.querySelector('#field1');
    const field = nameDe.nativeElement;

    // console.log(nameDe.nativeElement);
    fixture.detectChanges();
    tick(100);
    fixture.detectChanges();
    // console.log('value ', field.value);
    expect(field.value).toBe('field 2');
  }));

  // it('fakeAsync should have name "Dr IQ" on the name input field initially ', fakeAsync(() => {
  //   console.log(component.model.name);
  //   const nameDe = componentDe.query(By.css('[name="name"]'));

  //   console.log(nameDe.nativeElement);
  //   fixture.detectChanges();
  //   tick();
  //   fixture.detectChanges();
  //   console.log('value ', nameDe.nativeElement.value);
  //   expect(nameDe.nativeElement.value).toBe('Dr IQ');
  // }));

  // it('should update the name in the component ', async(() => {
  //   component.model.name = 'Dr IQ updated';
  //   console.log(component.model.name);
  //   const nameDe = componentDe.query(By.css('[name="name"]'));

  //   console.log(nameDe.nativeElement);
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     console.log('value ', nameDe.nativeElement.value);
  //     expect(nameDe.nativeElement.value).toBe('Dr IQ updated');
  //   });
  // }));

  it('fakeAsync should update the name in the component ', fakeAsync(() => {
    component.name1 = 'Dr IQ updated';
    console.log(component.name1);
    const nameDe = componentDe.query(By.css('[name="name"]'));

    console.log(nameDe.nativeElement);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    console.log('value ', nameDe.nativeElement.value);
    expect(nameDe.nativeElement.value).toBe('Dr IQ updated');
  }));


});
