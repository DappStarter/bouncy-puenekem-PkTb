require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name return stereo punch grace forest forget gas'; 
let testAccounts = [
"0xf3df2cce45af89784748d07cdeccafcb16f29e1b6167bcd86a63e03321cb5311",
"0xb768c191953bf31fa33ccbac9bae65af3863937f8b018ad5389b855fac3167d3",
"0x9140d92ddb5cf0607995d7b360da4d1090f649a010be3b7bf6b8db18ae1c1991",
"0x9158c39c88a290948568564662ab1beaf61b9de17c16e21aaa8f62be7d20de4b",
"0x0efa4b2c34fe048b120174a2ab44b6ccad9c7b41e287029fb88e995240417f31",
"0xfe8f75c538c8d8e54a49ea09734036a9dc1ffbaa0f270c9b956bdc823e295825",
"0xc337742cbf6e859901be6673d187ececbbe426ceaea4b952a9b5e9d478cfda2a",
"0x255e51377db38ff01abac9ba2c8940ca8f5352e159d792f89d3a6365f4c43a9a",
"0xb8f1a05934a1f2dd4c1f6ea8a44e517a10cb96c1a90303ce3e66997e666ebfd0",
"0xe1626acfe04f2a1d8971ff4eff8ae4757405308f82591a58e904b50bc31891d7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

