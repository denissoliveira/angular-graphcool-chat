import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { environment } from 'src/environments/environment';
import { onError } from 'apollo-link-error';

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

    const link = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    });

    // configuração do apollo
    apollo.create({
      link: http,
      cache: new InMemoryCache({ dataIdFromObject: object => object['id'] || defaultDataIdFromObject(object) }),
      // conecta com plugin do chrome do apollo, por default já esta true e false em produção
      connectToDevTools: !environment.production
    });
  }
}
