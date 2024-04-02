const Web3MarketingSuite = artifacts.require("Web3MarketingSuite");

module.exports = function(deployer) {
  deployer.deploy(Web3MarketingSuite);
};