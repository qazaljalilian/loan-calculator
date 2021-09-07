import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanFormComponent } from './loan-form.component';
import { HttpService } from './../http.service';
import {AppModule} from './../app.module'
import { HttpClientModule } from '@angular/common/http';
import {Coapplicant} from './loan-form.component'
import {Children} from './loan-form.component'
import { By } from '@angular/platform-browser';
describe('LoanFormComponent', () => {
  let component: LoanFormComponent;
  let fixture: ComponentFixture<LoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanFormComponent ],
      imports: [HttpClientModule,
        AppModule,],
        providers: [HttpService,
          {provide:FormBuilder}],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //check errors
  it('should check monthlyIncome field error', () => {
    let monthlyIncome = component.formGroupName.controls['monthlyIncome']
    expect(monthlyIncome.valid).toBeFalsy();
    expect(monthlyIncome.hasError('required')).toBeTruthy();
    monthlyIncome.setValue(200);
    expect(monthlyIncome.hasError('min')).toBeTruthy();
  });
  it('should check requestedAmount field error', () => {
    let requestedAmount = component.formGroupName.controls['requestedAmount']
    expect(requestedAmount.valid).toBeFalsy();
    expect(requestedAmount.hasError('required')).toBeTruthy();
    requestedAmount.setValue(1200);
    expect(requestedAmount.hasError('min')).toBeTruthy();
  });
  it('should check loanTerm field error', () => {
    let loanTerm = component.formGroupName.controls['loanTerm']
    expect(loanTerm.valid).toBeFalsy();
    expect(loanTerm.hasError('required')).toBeTruthy();
    loanTerm.setValue(12);
    expect(loanTerm.hasError('min')).toBeTruthy();
    loanTerm.setValue(400);
    expect(loanTerm.hasError('max')).toBeTruthy();
  });
  it('should check children field is empty', () => {
    let children = component.formGroupName.controls['children']
    expect(children.valid).toBeFalsy();
    expect(children.hasError('required')).toBeTruthy();
  });
  it('should check coapplicant field is empty', () => {
    let coapplicant = component.formGroupName.controls['coapplicant']
    expect(coapplicant.valid).toBeFalsy();
    expect(coapplicant.hasError('required')).toBeTruthy();
  });

//check having no errors
  it('should have no errors while monthlyIncome amount  is correct ', () => {
    let monthlyIncome = component.formGroupName.controls['monthlyIncome']
    monthlyIncome.setValue(500);
    expect(monthlyIncome.valid).toBeTruthy();
  });
    it('should have no errors while requestedAmount  is correct ', () => {
    let requestedAmount = component.formGroupName.controls['requestedAmount']
    requestedAmount.setValue(20000);
    expect(requestedAmount.valid).toBeTruthy();
  });
  it('should have no errors while loanTerm  is correct ', () => {
    let loanTerm = component.formGroupName.controls['loanTerm']
    loanTerm.setValue(120);
    expect(loanTerm.valid).toBeTruthy();
  });
  it('should have no errors while children field is correct ', () => {
    let children = component.formGroupName.controls['children']
    children.setValue(Children.MULTIPLE);
    expect(children.valid).toBeTruthy();
  });
  it('should have no errors while coapplicant field is correct ', () => {
    let coapplicant = component.formGroupName.controls['coapplicant']
    coapplicant.setValue(Coapplicant.SINGLE_BORROWER);
    expect(coapplicant.valid).toBeTruthy();
  });
  it('should check form is invalid with no data ', () => {
    expect(component.formGroupName.valid).toBeFalsy();
  });
  it('should check form is valid  with correct data ', () => {
    component.formGroupName.controls['monthlyIncome'].setValue(500);
    component.formGroupName.controls['requestedAmount'].setValue(20000);
    component.formGroupName.controls['loanTerm'].setValue(300);
    component.formGroupName.controls['children'].setValue(Children.NONE);
    component.formGroupName.controls['coapplicant'].setValue(Coapplicant.NONE);
    expect(component.formGroupName.valid).toBeTruthy();
  });
  it('should check form is submitted', () => {
    expect(component.formGroupName.valid).toBeFalsy();
    let btn = fixture.debugElement.query(By.css('.button')).nativeElement;
    expect(btn.disabled).toBe(true);
    component.formGroupName.controls['monthlyIncome'].setValue(500);
    component.formGroupName.controls['requestedAmount'].setValue(20000);
    component.formGroupName.controls['loanTerm'].setValue(300);
    component.formGroupName.controls['children'].setValue(Children.NONE);
    component.formGroupName.controls['coapplicant'].setValue(Coapplicant.NONE);
    fixture.detectChanges();
    expect(component.formGroupName.valid).toBeTruthy();
    expect(btn.disabled).toBe(false);

  });
});


