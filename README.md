# Example

An example keeper implementation that uses the KeeperDAO liquidity pool. It will:

1. Call [`LiquidityPool.borrow`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L116) to borrow ETH from the KeeperDAO liquidity pool,
2. [Specify `helloCallback`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L125) as the callback implementing custom keeper logic (this is where arbitrage/liquidation logic would go), and
3. [Implement `helloCallback`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L165) by immediately returning all borrowed ETH, using its own balance to also return some profits.

Checkout the commented code for more information.

## Addresses

| Contract | Address |
|----------|---------|
| LiquidityPool | [`0xAaE0633E15200bc9C50d45cD762477D268E126BD`](https://etherscan.io/address/0xAaE0633E15200bc9C50d45cD762477D268E126BD) |
| BorrowProxy | [`0x9cd7b3747d7bc2f01a1aafd30a11e09f257633e6`](https://etherscan.io/address/0x9cd7b3747d7bc2f01a1aafd30a11e09f257633e6) |
