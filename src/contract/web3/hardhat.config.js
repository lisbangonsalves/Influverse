require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: "ganache",
    networks: {
      hardhat: {},
      goerli: {
        url: "HTTP://127.0.0.1:7545",
        accounts: ["0xd863622d11229c06218dde477565f3db222a1c2cf4cc0b34cc4168c791dff760"],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
