import { NgModule } from '@angular/core';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountInfoComponent
  ],
  imports: [
    AccountRoutingModule
  ],
  providers: [],
})
export class AccountModule { }
