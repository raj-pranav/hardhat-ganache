// About: Stores two state variable and return them or update the value of one var.

// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.9;

contract RFID_Car {

    uint32 num;  // not a public state variable

    // function to read number
    function read_num() public view returns (uint32) {
        return num;
    }

    // function to change/update number
    function update_num(uint32 _val) public {
        num = _val;
    }

}