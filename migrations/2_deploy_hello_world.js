const HelloWorld = artifacts.require("HelloWorld");
const LiquidityPool = artifacts.require("LiquidityPoolV1");
const BorrowerProxy = artifacts.require("BorrowerProxy");

module.exports = function (deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(LiquidityPool);
    deployer.deploy(BorrowerProxy);
};

