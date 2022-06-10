pragma solidity ^0.8.0;

contract Chains{
    address owner;
    uint256 imageid;

    struct Image{
        address owner;
        uint256 imageid;
        string price;
        string desc;
        string hash;
    }

    mapping(uint256 => Image) public images;

    function addImage(string memory _price, string memory _desc, string memory _hash) public{
        ++imageid;
        images[imageid]=Image(msg.sender,imageid, _price,_desc,_hash);
    }

    function changeOwner(uint256 key) public{
        images[key].owner = msg.sender;
    }

    function getImage(uint256 key) public view returns(Image memory){
        return images[key];
    }
}