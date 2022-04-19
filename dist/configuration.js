"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfiguration = void 0;
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const configuration = Object.freeze({
    storageKey: 'beland-connect-storage-key',
    [provider_type_1.ProviderType.INJECTED]: {},
    [provider_type_1.ProviderType.WALLET_CONNECT]: {
        urls: {
            [chain_id_1.ChainId.KAI_MAINNET]: 'https://rpc.kardiachain.io'
        }
    }
});
function getConfiguration() {
    return configuration;
}
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=configuration.js.map