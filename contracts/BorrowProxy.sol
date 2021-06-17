/**
 *Submitted for verification at Etherscan.io on 2020-07-18
*/

pragma solidity 0.5.12;

contract BorrowerProxy {
    function lend(address _caller, bytes calldata _data) external payable {
        (bool success,) = _caller.call.value(msg.value)(_data);
        require(success, "BorrowerProxy: Borrower contract reverted during execution");
    }
}