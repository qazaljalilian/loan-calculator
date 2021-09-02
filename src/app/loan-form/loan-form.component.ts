import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
  formGroupName = this._formBuilder.group({
    monthlyIncome: ['', Validators.min(500000)],
    requestedAmount: ['', Validators.required],
    loanTerm: ['', [Validators.required, Validators.email]],
    children: ['', Validators.required],
    coapplicant: ['', Validators.required],
});
constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

}
