import { ChainId } from '@beland/schemas/dist/dapps/chain-id'
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type'
import { expect } from 'chai'
import { getConfiguration } from '../src/configuration'

describe('#getConfiguration', () => {
  it('should return the configuration using the environment', () => {
    expect(getConfiguration()).to.deep.eq({
      [ProviderType.INJECTED]: {},
      storageKey: 'beland-connect-storage-key',
      [ProviderType.WALLET_CONNECT]: {
        urls: {
          [ChainId.KAI_MAINNET]: 'https://rpc.kardiachain.io'
        }
      }
    })
  })
})
