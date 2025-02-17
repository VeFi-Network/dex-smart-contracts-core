require('@nomiclabs/hardhat-ganache');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
// require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-etherscan');

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: ['0x9bce709a035954deb674a4538ac91cf90518777c98d608c008a31ef700814ffd'], // Try stealing the funds in this
      chainId: 1337,
    },
    bsc_testnet: {
      url: 'https://bsctestapi.terminet.io/rpc',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 97,
    },
    bitgert_mainnet: {
      url: 'https://rpc.icecreamswap.com',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 32520,
    },
    gatechain_mainnet: {
      url: 'https://evm.gatenode.cc',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 86,
    },
    ethereum_mainnet: {
      url: 'https://eth.llamarpc.com',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
    },
    matic_mainnet: {
      url: 'https://matic-mainnet.chainstacklabs.com',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137,
    },
    avalanche_mainnet: {
      url: 'https://1rpc.io/avax/c',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 43114,
    },
    omax_mainnet: {
      url: 'https://mainapi.omaxray.com',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 311,
    },
    bsc_mainnet: {
      url: 'https://bsc-dataseed4.defibit.io',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 56,
    },
    astar_mainnet: {
      url: 'https://nodes.vefinetwork.org/astar',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 592
    },
    wanchain_mainnet: {
      url: 'https://gwan-ssl.wandevs.org:56891',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 888,
    },
    okx_mainnet: {
      url: 'https://exchainrpc.okex.org',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 66,
    },
    telos_mainnet: {
      url: 'https://mainnet.telos.net/evm',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 40,
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.BSC_API_KEY,
      bitgert: process.env.BSC_API_KEY,
    },
    customChains: [
      {
        network: 'bitgert',
        chainId: 32520,
        urls: {
          apiURL: 'https://brisescan.com/api',
          browserURL: 'https://brisescan.com',
        },
      },
    ],
  },
};
