//SPDX-License-Identifier: MIT
//to tell which version we want use
pragma solidity ^0.8.9; 

// define contract
// every smart contract have address
contract myContract {

    uint256 myNumber;
    //array
    // uint256[] public favouriteNumber;
    //struct
    
    struct People {
        uint256 favouriteNumber;
        string name;
    }

    People[] public people;

    // mappings
    mapping(string => uint256) public stringTofavNumber;

    //function while we call this function we perform a transaction it costs gas fee the more the complex function
    // more gas fee charged

    function store(uint256 _myNumber) public {
        myNumber = _myNumber;
    }

    // view , pure function allow read only so do not allow any change  --> do not cost gas
    function getMyNumber() public view returns (uint256) {
        return myNumber;
    }

    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        People memory newPerson = People({
            favouriteNumber: _favouriteNumber,
            name: _name
        });
        people.push(newPerson);
        stringTofavNumber[_name] = _favouriteNumber;
    }

}
