import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AppHeaderComponent
  ],
  imports: [
    LayoutRoutingModule
  ],
  providers: [],
  entryComponents:[MainLayoutComponent]
})
export class LayoutModule { }
