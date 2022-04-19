"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletLinkConnector = void 0;
const walletlink_connector_1 = require("@web3-react/walletlink-connector");
const NetworkConnector_1 = require("./NetworkConnector");
const APP_NAME = 'Beland';
// Coinbase connector to connect a wallet with the Coinbase mobile wallet
class WalletLinkConnector extends walletlink_connector_1.WalletLinkConnector {
    constructor(chainId) {
        super({
            url: NetworkConnector_1.RPC_URLS[chainId],
            appName: APP_NAME,
            supportedChainIds: [chainId]
        });
    }
}
exports.WalletLinkConnector = WalletLinkConnector;
//# sourceMappingURL=WalletLinkConnector.js.map