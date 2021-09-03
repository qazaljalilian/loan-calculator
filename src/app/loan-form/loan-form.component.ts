import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';
import { formData } from './../models/form-data';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css'],
})
export class LoanFormComponent implements OnInit {
  public children = children;
  public coapplicant = coapplicant;
  post: any = '';

  formGroupName = this._formBuilder.group({
    monthlyIncome: ['', [Validators.min(500000), Validators.required]],
    requestedAmount: ['', [Validators.min(20000000), Validators.required]],
    loanTerm: ['', [Validators.min(36), Validators.max(360),Validators.required]],
    children: ['', Validators.required],
    coapplicant: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
    private config:ConfigService) {}

  ngOnInit(): void {}
  onSubmit(data: formData ) {
    this.config.submitForm(data);
  }
}
export enum children {
  NONE = 'none',
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
export enum coapplicant {
  NONE = 'none',
  SINGLE_BORROWER = 'single borrower',
  MULTIPLE_BORROWERS = 'multiple borrowers',
}
