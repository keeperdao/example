# Example

An example keeper implementation that uses the KeeperDAO liquidity pool. It will:

1. Call `LiquidityPool.borrow` to borrow ETH from the KeeperDAO liquidity pool,
2. Specify `helloCallback` as the callback implementing custom keeper logic (this is where arbitrage/liquidation logic would go), and
3. Implements `helloCallback` by immediately returning all borrowed ETH, using its own balance to also return some profits.

Checkout the commented code for more information.

## Addresses

| Contract | Address |
|----------|---------|
| LiquidityPool | [0xEB7e15B4E38CbEE57a98204D05999C3230d36348](https://etherscan.io/address/0xEB7e15B4E38CbEE57a98204D05999C3230d36348) |
| BorrowProxy | [0x82151ca501c81108d032c490e25f804787bef3b8](https://etherscan.io/address/0x82151ca501c81108d032c490e25f804787bef3b8) |
