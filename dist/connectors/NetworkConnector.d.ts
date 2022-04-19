import { ChainId } from '@beland/schemas';
import { NetworkConnector as BaseNetworkConnector } from '@web3-react/network-connector';
export declare const RPC_URLS: Readonly<{
    27: string;
}>;
export declare class NetworkConnector extends BaseNetworkConnector {
    constructor(chainId: ChainId);
}
