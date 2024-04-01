// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Web3MarketingSuite {
    struct Business {
        uint256 id;
        string name;
    }

    struct Campaign {
        uint256 id;
        string name;
        uint256 startDate;
        uint256 endDate;
        uint256 budget;
        mapping(address => string) influencers;
        uint256 businessId; // Associate each campaign with a business
    }

    uint256 public businessCount = 0;
    uint256 public campaignCount = 0;
    mapping(uint256 => Business) public businesses;
    mapping(uint256 => Campaign) public campaigns;

    event BusinessCreated(uint256 indexed businessId, string name);
    event CampaignCreated(uint256 indexed campaignId, string name, uint256 startDate, uint256 endDate, uint256 budget, uint256 businessId);
    event InfluencerAdded(uint256 indexed campaignId, address indexed influencer, string name);
    event InfluencerRemoved(uint256 indexed campaignId, address indexed influencer);
    event TransactionMade(uint256 indexed campaignId, address indexed influencer, uint256 amount);

    // Function to create a new business
    function createBusiness(string memory _name) public {
        businessCount++;
        businesses[businessCount] = Business(businessCount, _name);
        emit BusinessCreated(businessCount, _name);
    }

    // Function to create a new campaign by a business
   function createCampaign(string memory _businessName, string memory _name, uint256 _startDate, uint256 _endDate, uint256 _budget) public {
        uint256 businessId = findBusinessIdByName(_businessName);
        require(businessId != 0, "Business does not exist");
        campaignCount++;
        Campaign storage newCampaign = campaigns[campaignCount];
        newCampaign.id = campaignCount;
        newCampaign.name = _name;
        newCampaign.startDate = _startDate;
        newCampaign.endDate = _endDate;
        newCampaign.budget = _budget;
        newCampaign.businessId = businessId;
        emit CampaignCreated(campaignCount, _name, _startDate, _endDate, _budget, businessId);
    }
    function findBusinessIdByName(string memory _name) internal view returns (uint256) {
        for (uint256 i = 1; i <= businessCount; i++) {
            if (keccak256(abi.encodePacked(businesses[i].name)) == keccak256(abi.encodePacked(_name))) {
                return businesses[i].id;
            }
        }
        return 0; // Return 0 if no business is found with the given name
    }

    function addInfluencer(uint256 _campaignId, address _influencer, string memory _name) public {
        Campaign storage campaign = campaigns[_campaignId];
        campaign.influencers[_influencer] = _name;
        emit InfluencerAdded(_campaignId, _influencer, _name);
    }

    function removeInfluencer(uint256 _campaignId, address _influencer) public {
        Campaign storage campaign = campaigns[_campaignId];
        delete campaign.influencers[_influencer];
        emit InfluencerRemoved(_campaignId, _influencer);
    }

    // Internal function to get a campaign
    function _getCampaign(uint256 _campaignId) internal view returns (Campaign storage) {
        return campaigns[_campaignId];
    }

    // Public function to get campaign details
    function getCampaignDetails(uint256 _campaignId) public view returns (uint256, string memory, uint256, uint256, uint256) {
        Campaign storage campaign = _getCampaign(_campaignId);
        return (campaign.id, campaign.name, campaign.startDate, campaign.endDate, campaign.budget);
    }

    // Function to get a list of campaign IDs
    function getCampaigns(uint256 startIndex, uint256 endIndex) public view returns (uint256[] memory) {
        require(endIndex > startIndex, "End index must be greater than start index");
        require(endIndex <= campaignCount, "End index out of bounds");

        uint256[] memory campaignIds = new uint256[](endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            campaignIds[i - startIndex] = i;
        }
        return campaignIds;
    }

    // Function to make a transaction between a user and an influencer
    function makeTransaction(string memory _campaignName, address payable _influencer, uint256 _amount) public payable {
        uint256 campaignId = findCampaignIdByName(_campaignName);
        require(campaignId != 0, "Campaign name not found");
        Campaign storage campaign = campaigns[campaignId];
        require(bytes(campaign.influencers[_influencer]).length > 0, "Influencer is not part of the campaign");
        require(_amount <= msg.value, "Sent amount is less than the specified amount");
        _influencer.transfer(_amount);
        emit TransactionMade(campaignId, _influencer, _amount);
    }
    function findCampaignIdByName(string memory _name) internal view returns (uint256) {
        for (uint256 i = 1; i <= campaignCount; i++) {
            if (keccak256(abi.encodePacked(campaigns[i].name)) == keccak256(abi.encodePacked(_name))) {
                return campaigns[i].id;
            }
        }
        return 0; // Return 0 if no campaign is found with the given name
    }
    function getCampaignIdByName(string memory _name) public view returns (uint256) {
        for (uint256 i = 1; i <= campaignCount; i++) {
            if (keccak256(abi.encodePacked(campaigns[i].name)) == keccak256(abi.encodePacked(_name))) {
                return campaigns[i].id;
            }
        }
        revert("Campaign name not found");
    }
}
