import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loan-booking',
  templateUrl: './loan-booking.component.html',
  styleUrls: ['./loan-booking.component.css']
})
/* 货款预定组件 */
export class LoanBookingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
