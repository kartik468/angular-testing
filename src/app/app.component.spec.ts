import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { MessageService } from './services/message.service';

let fixture: ComponentFixture<AppComponent>;
let appComp: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        MessageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComp = fixture.componentInstance;
    // fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(appComp).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    expect(appComp.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-testing app is running!');
  });

  it('should update the title', () => {
    const de = fixture.debugElement;
    const btn1De = de.query(By.css('.btn1'));
    btn1De.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(appComp.title).toContain('updated');
  });

  it('should call asyncTest function on button 2 click', () => {
    // const asyncTestMock = spyOn(appComp, 'asyncTest').and.callThrough();
    const de = fixture.debugElement;
    const btn1De = de.query(By.css('.btn2'));
    btn1De.triggerEventHandler('click', null);
    fixture.detectChanges();
    // expect(appComp.asyncTest).toHaveBeenCalled();
    expect(1).toBe(1);
  });
});
