import { InjectionToken } from '@angular/core';

const graphcoolId = 'cjpr7zirvmj2p0172uqx5c7oe';

export interface GraphcoolConfig {
  simpleAPI: string;
  subscriptionsAPI: string;
  fileAPI: string;
  fileDownloadURL: string;
}

export const graphcoolConfig: GraphcoolConfig = {
  simpleAPI: `https://api.graph.cool/simple/v1/${graphcoolId}`,
  subscriptionsAPI: `wss://subscriptions.graph.cool/v1/${graphcoolId}`,
  fileAPI: `https://api.graph.cool/file/v1/${graphcoolId}`,
  fileDownloadURL: `https://files.graph.cool/${graphcoolId}`
};

export const GRAPHCOOL_CONFIG = new InjectionToken<GraphcoolConfig>(
  'graphcool.config',
  {
    providedIn: 'root',
    factory: () => {
      return graphcoolConfig;
    }
  }
);


/* Simple         https://api.graph.cool/simple/v1/cjpr7zirvmj2p0172uqx5c7oe
Relay          https://api.graph.cool/relay/v1/cjpr7zirvmj2p0172uqx5c7oe
Subscriptions  wss://subscriptions.graph.cool/v1/cjpr7zirvmj2p0172uqx5c7oe
File           https://api.graph.cool/file/v1/cjpr7zirvmj2p0172uqx5c7oe
*/
