import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanBookingComponent } from './loan-booking/loan-booking.component';

const routes: Routes = [
  { path: 'loan-booking', component: LoanBookingComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
