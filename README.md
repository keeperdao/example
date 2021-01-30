# Example

An example keeper implementation that uses the KeeperDAO liquidity pool. It will:

1. Call [`LiquidityPool.borrow`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L116) to borrow ETH from the KeeperDAO liquidity pool,
2. [Specify `helloCallback`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L125) as the callback implementing custom keeper logic (this is where arbitrage/liquidation logic would go), and
3. [Implement `helloCallback`](https://github.com/keeperdao/example/blob/master/contracts/HelloWorld.sol#L165) by immediately returning all borrowed ETH, using its own balance to also return some profits.

Checkout the commented code for more information.

## Addresses

| Contract | Address |
|----------|---------|
| LiquidityPool | [`0x35ffd6e268610e764ff6944d07760d0efe5e40e5`](https://etherscan.io/address/0x35ffd6e268610e764ff6944d07760d0efe5e40e5) |
| BorrowProxy | [`0xde92742213FEa5f78c6840B6EcBf214115ea8002`](https://etherscan.io/address/0xde92742213FEa5f78c6840B6EcBf214115ea8002) |
