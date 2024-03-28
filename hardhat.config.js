require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const { alchemyApiKey, mnemonic } = require('./secrets.json');

module.exports = {
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic }
    }
  },
  solidity: "0.8.0",
  etherscan: {
    apiKey: "" // Add your Etherscan API key here
  }
};
