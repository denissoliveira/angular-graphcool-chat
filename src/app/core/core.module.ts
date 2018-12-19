import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatToolbarModule, MatListModule } from '@angular/material';
import { ApolloConfigModule } from '../apollo-config/apollo-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  exports : [
    AppRoutingModule,
    BrowserAnimationsModule,
    ApolloConfigModule,
    MatListModule,
    MatToolbarModule
  ]
}) // tipo singleton
export class CoreModule {
  constructor(
    // pode ser que a injeção de CoreModule não exista
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
