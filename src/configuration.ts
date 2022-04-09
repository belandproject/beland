import { ChainId } from '@beland/schemas/dist/dapps/chain-id'
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type'

const configuration = Object.freeze({
  storageKey: 'beland-connect-storage-key',

  [ProviderType.INJECTED]: {},

  [ProviderType.WALLET_CONNECT]: {
    urls: {
      [ChainId.KAI_MAINNET]: 'https://rpc.kardiachain.io'
    }
  }
})

export function getConfiguration() {
  return configuration
}
