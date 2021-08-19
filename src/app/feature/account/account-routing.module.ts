import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {path: '', redirectTo: 'accountinfo'},
            {
                path: 'accountinfo',
                component: AccountInfoComponent,
                pathMatch: 'full'
            },
            {
                path: 'accountregister',
                loadChildren: ()=> import('../../feature/account/account-registration/account-registration.module').then(m=>m.AccountRegistrationModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
