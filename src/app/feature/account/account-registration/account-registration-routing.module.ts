import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRegistrationComponent } from './account-registration.component';

const routes: Routes = [
    {
        path: '',
        component: AccountRegistrationComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRegisterRoutingModule { }
