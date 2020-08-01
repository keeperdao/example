# Example

An example keeper implementation that uses the KeeperDAO liquidity pool. It will:

1. Call `LiquidityPool.borrow` to borrow ETH from the KeeperDAO liquidity pool,
2. Specify `helloCallback` as the callback implementing custom keeper logic (this is where arbitrage/liquidation logic would go), and
3. Implements `helloCallback` by immediately returning all borrowed ETH, using its own balance to also return some profits.

Checkout the commented code for more information.