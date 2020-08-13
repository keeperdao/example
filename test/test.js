const HelloWorld = artifacts.require('HelloWorld');
const BorrowProxy = artifacts.require('BorrowerProxy');
const LiquidityPool = artifacts.require('LiquidityPoolV1');

/*
 * For test on mainnet or testnet
 * const HDWalletProvider = require('@truffle/hdwallet-provider');
 * const infuraKey = "fj4jll3k.....";
 * const fs = require('fs');
 * const mnemonic = fs.readFileSync(".secret").toString().trim();
 * const provider = new HDWalletProvider(mnemonic, "https://<network>.infura.io/v3/YOUR-PROJECT-ID");
 * web3.setProvider(provider);
*/

// For locaol test
web3.setProvider("http://127.0.0.1:8545");

contract("HelloWorld", async (accounts) => {

    it("initialize three smart contracts, send LiquidityPool 10 eth and send HelloWorld 1 eth", async () => {
        var helloWorld = await HelloWorld.deployed();
        var borrowProxy = await BorrowProxy.deployed();
        var liquidityPool = await LiquidityPool.deployed();
        
        await liquidityPool.initialize("1", helloWorld.address);

        // Send 10 ETH to LiquidityPool, from default account accounts[0]
        await liquidityPool.sendTransaction({value: 1e19});
        // Send 1 ETH to HelloWorld, from default account accounts[0]
        await helloWorld.sendTransaction({value: 1e18});

        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), 1, "The balance of HelloWorld is wrong");
        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), 10, "The balance of LiquidityPool is wrong");

        console.log("The balance of HelloWorld before borrowing:", web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), "eth");
        console.log("The balance of LiquidityPool before borrowing:", web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), "eth");
    });

    it("HelloWorld should borrow 0.1 eth form LiquidityPool with 0.1 eth profit", async () => {
        var helloWorld = await HelloWorld.deployed();
        var borrowProxy = await BorrowProxy.deployed();
        var liquidityPool = await LiquidityPool.deployed();

        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), 1, "The balance of HelloWorld is wrong");
        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), 10, "The balance of LiquidityPool is wrong");

        console.log("The balance of HelloWorld before borrowing:", web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), "eth");
        console.log("The balance of LiquidityPool before borrowing:", web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), "eth");

        await helloWorld.setBorrowProxy(borrowProxy.address);
        await helloWorld.setLiquidityPool(liquidityPool.address);
        await helloWorld.hello(web3.utils.toBN(1e17), web3.utils.toBN(1e17));

        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), 1.1, "The balance of HelloWorld is wrong");
        assert.equal(web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), 9.9, "The balance of LiquidityPool is wrong");

        console.log("The balance of HelloWorld after borrowing:", web3.utils.fromWei(await web3.eth.getBalance(helloWorld.address)), "ether");
        console.log("The balance of LiquidityPool after borrowing:", web3.utils.fromWei(await web3.eth.getBalance(liquidityPool.address)), "ether"); 
    });

});