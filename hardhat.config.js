require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.4",
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    currency: 'USD',
    coinmarketcap: process.env.coinMarketCap_API
  }
};

