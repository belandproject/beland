"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkConnector = exports.RPC_URLS = void 0;
const schemas_1 = require("@beland/schemas");
const network_connector_1 = require("@web3-react/network-connector");
exports.RPC_URLS = Object.freeze({
    [schemas_1.ChainId.KAI_MAINNET]: 'https://rpc.kardiachain.io'
});
class NetworkConnector extends network_connector_1.NetworkConnector {
    constructor(chainId) {
        super({ urls: exports.RPC_URLS, defaultChainId: chainId });
    }
}
exports.NetworkConnector = NetworkConnector;
//# sourceMappingURL=NetworkConnector.js.map