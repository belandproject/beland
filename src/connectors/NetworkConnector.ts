import { ChainId } from '@beland/schemas'
import { NetworkConnector as BaseNetworkConnector } from '@web3-react/network-connector'

export const RPC_URLS = Object.freeze({
  [ChainId.KAI_MAINNET]: 'https://rpc.kardiachain.io'
})

export class NetworkConnector extends BaseNetworkConnector {
  constructor(chainId: ChainId) {
    super({ urls: RPC_URLS, defaultChainId: chainId })
  }
}
