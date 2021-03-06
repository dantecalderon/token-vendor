pragma solidity >=0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./YourToken.sol";

contract Vendor is Ownable {
    YourToken yourToken;

    uint256 public constant tokensPerEth = 100;

    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

    constructor(address tokenAddress) public {
        yourToken = YourToken(tokenAddress);
    }

    //ToDo: create a payable buyTokens() function:
    function buyTokens() public payable {
        uint256 tokensAmount = msg.value * tokensPerEth;
        yourToken.transfer(msg.sender, tokensAmount);
        emit BuyTokens(msg.sender, msg.value, tokensAmount);
    }

    //ToDo: create a sellTokens() function:

    //ToDo: create a withdraw() function that lets the owner, you can
    //use the Ownable.sol import above:
}
