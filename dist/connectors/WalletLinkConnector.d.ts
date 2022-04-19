import { ChainId } from '@beland/schemas';
import { WalletLinkConnector as BaseWalletLinkConnector } from '@web3-react/walletlink-connector';
export declare class WalletLinkConnector extends BaseWalletLinkConnector {
    constructor(chainId: ChainId);
}
