const Migrations = artifacts.require("Migrations");
const postBox = artifacts.require("postBox");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(postBox);
};
