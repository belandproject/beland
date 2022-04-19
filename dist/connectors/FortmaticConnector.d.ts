import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { FortmaticConnector as BaseFortmaticConnector } from '@web3-react/fortmatic-connector';
export declare class FortmaticConnector extends BaseFortmaticConnector {
    apiKeys: Record<number, string>;
    constructor(chainId: ChainId);
    getApiKey(): Promise<string>;
}
