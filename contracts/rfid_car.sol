// About: Stores two state variable and return them or update the value of one var.

// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.9;

contract RFID_Car {

    uint32  num ;
    address public myself ;

    constructor () {
        num = 10;
        myself = msg.sender;
    }

    // function to read number
    function read_num_add() public view returns (uint32, address) {
        return (num , myself);
    }

    // function to change/update number
    function update_num(uint32 _val) public returns (uint32) {
        //require(_val <= 4294967295, "Number is too large");
        num = _val;
        return num;
    }


}