// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Web3MarketingSuite {
    // Structs to define the user types
    struct Influencer {
        string name;
        address walletAddress;
    }

    struct Business {
        string name;
    }

    // Mapping to store influencers by their wallet address
    mapping(address => Influencer) public influencersByAddress;

    // Mapping to store influencers by their name
    mapping(string => address) public influencersByName;

    // Mapping to store businesses by their name
    mapping(string => Business) public businesses;

    // Mapping to store campaigns by their business name
    mapping(string => mapping(string => Campaign)) public campaigns;

    // Struct to represent a campaign
    struct Campaign {
        string businessName;
        string campaignName;
        mapping(string => bool) influencers; // Mapping to store influencers in the campaign
    }

    // Event to emit when a new influencer is registered
    event InfluencerRegistered(address indexed walletAddress, string name);

    // Event to emit when a new business is registered
    event BusinessRegistered(string indexed name);

    // Event to emit when a transaction is made to an influencer
    event TransactionToInfluencer(string indexed influencerName, address indexed influencerAddress, uint256 amount);

    // Function to register a new influencer
    function registerInfluencer(string memory _name, address _walletAddress) public {
        require(_walletAddress!= address(0), "Wallet address cannot be the zero address");
        require(bytes(_name).length > 0, "Influencer name cannot be empty");
        require(influencersByName[_name] == address(0), "Influencer with this name already exists");
        
        influencersByAddress[_walletAddress] = Influencer(_name, _walletAddress);
        influencersByName[_name] = _walletAddress;
        
        emit InfluencerRegistered(_walletAddress, _name);
    }

    // Function to register a new business
    function registerBusiness(string memory _name) public {
        require(bytes(_name).length > 0, "Business name cannot be empty");
        businesses[_name] = Business(_name);
        emit BusinessRegistered(_name);
    }

    // Function to make a transaction to an influencer with a specified gas limit
    function makeTransactionToInfluencer(string memory _influencerName, uint256 _amount) public payable {
    require(bytes(_influencerName).length > 0, "Influencer name cannot be empty");
    require(msg.value >= _amount, "Insufficient funds");

    address influencerAddress = influencersByName[_influencerName];
    require(influencerAddress!= address(0), "Influencer with this name does not exist");

    // Set a maximum gas limit for the transaction
    uint256 maxGas = 100000; // Example maximum gas limit

    // Transfer funds to the influencer's address with the maximum gas limit
    (bool success, ) = payable(influencerAddress).call{value: _amount, gas: maxGas}("");
    require(success, "Failed to send Ether to influencer");
}
}
