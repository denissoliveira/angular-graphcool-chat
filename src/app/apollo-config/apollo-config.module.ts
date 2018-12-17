import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class ApolloConfigModule {
  constructor (
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
      const uri = 'https://api.graph.cool/simple/v1/cjpr7zirvmj2p0172uqx5c7oe';

      // como a variavel tem o mesmo nome não repcisa ser { uri:uri }
      const http = httpLink.create({ uri });

      // configuração do apollo
      apollo.create({
        link: http,
        cache: new InMemoryCache()
      });
  }
}
