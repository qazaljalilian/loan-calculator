import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { formData } from './../models/form-data';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'],
})
export class LoanFormComponent implements OnInit {
  public children = Children;
  public coapplicant = Coapplicant;
  post: any = '';

  formGroupName = this._formBuilder.group({
    monthlyIncome: ['', [Validators.min(500.0), Validators.required]],
    requestedAmount: ['', [Validators.min(20000.0), Validators.required]],
    loanTerm: [
      '',
      [Validators.min(36), Validators.max(360), Validators.required],
    ],
    children: ['', Validators.required],
    coapplicant: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private config: HttpService,
  ) {}

  ngOnInit(): void {}
  onSubmit(data: formData) {
    try {
      const res = this.config.fakeSubmitData(data)
      window.alert(JSON.stringify(res));
    } catch (err) {
      console.log(err);
      window.alert(err);
      this.formGroupName.controls['requestedAmount'].setErrors({'incorrect': true});
    }
  }

}
export enum Children {
  NONE = 'none',
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
export enum Coapplicant {
  NONE = 'none',
  SINGLE_BORROWER = 'single borrower',
  MULTIPLE_BORROWERS = 'multiple borrowers',
}
