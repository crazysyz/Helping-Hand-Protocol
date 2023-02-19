// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    // Ethereum price contract - 0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419 

    constructor() {
        priceFeed = AggregatorV3Interface(
            0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419
        );
    }

    /**
     * Returns the latest price.
     */
    function getLatestPrice() public view returns (int) {
        (
            int price
        ) = priceFeed.latestRoundData();
        return price;
    }
}
