var Marketplace = artifacts.require("./marketplace.sol");

module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};

//Better to use java script to test since there is more documentation than solidity testing 