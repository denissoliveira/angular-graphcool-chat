import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule, // modulo que compartilha recursos por toda a app
    LoginRoutingModule
  ]
})
export class LoginModule { }
