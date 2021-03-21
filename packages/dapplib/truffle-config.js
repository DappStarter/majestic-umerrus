require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remind pumpkin grace near outer tree'; 
let testAccounts = [
"0x5af898f98d47e4a5f1137db5c80e6ffc98ea0409a4ccc3ddd550ee377499a3ed",
"0x1ac72604c5fd7cae10557a07f48094289afb3d4007b9c366b98172521a1446d4",
"0xa35a95a2fd62b2de32492d43478bc9a64d59bfa3852db98c3fe446b0bc1a3a65",
"0xfa3ac2d09391a2d0c721ace432f90caeb2c00065ace8782086d471a66f747b4e",
"0xe7f55f9afb4945da0d4789f94e1090e84f0c65dce789c5ceaf53e80d90635b8c",
"0xd27368cf48a086a8e4dd871a035a3599be2f584fcf7a2a0ff26f6338c886ce82",
"0x976792479d23e18e88d72f06d2bd3c2dc3de5b6225ea06f526066f8ddd63d8a1",
"0xe91d92aef8d0bac4f5b6bc69ba5e7bdaf36d3d0d9208efdb489ffab60b06128d",
"0xaa7999ae136e14200df64bb826e91da4cd9f5a38f91bd8b2a644a0ffd92b510e",
"0x54ee84961b363a04492477ccf9c2e877a03eafd46e4f18b73fdf84839c1e2c85"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
