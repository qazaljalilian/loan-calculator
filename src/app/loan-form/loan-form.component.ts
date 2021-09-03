import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})

export class LoanFormComponent implements OnInit {
  public children = children;
  public coapplicant = coapplicant;
formGroupName = this._formBuilder.group({
    monthlyIncome: ['', [Validators.min(500000), Validators.required]],
    requestedAmount: ['', [Validators.min(20000000), Validators.required]],
    loanTerm: ['', [Validators.min(36), Validators.max(360)]],
    children: ['', Validators.required],
    coapplicant: ['', Validators.required],
});

constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
export enum children {
	NONE = "none",
	SINGLE = "single",
	MULTIPLE = "multiple",
}
export enum coapplicant {
	NONE = "none",
	SINGLE_BORROWER = "single borrower",
	MULTIPLE_BORROWERS = "multiple borrowers" ,
}

