// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.5.0 <0.9.0;

contract Crowd{
    mapping(address=>uint) public contributors;
    address public admin;
    uint public numberOfContributors;
    uint public minimumContribution;
    uint public deadline;
    uint public goal;
    uint public raisedAmount;

    struct Request{
        string description;
        address payable recipient;
        uint value;
        bool completed;
        uint noOfVoters;
        mapping(address=>bool) voters;
    }

    event ContributeEvent(address _sender, uint _value);
    event createRequestNewEvent(string _description,address payable _recipient,uint _value);
    event MakePaymentEvent(address _recipient, uint _value);

    mapping(uint=>Request) public requests;

    uint public numRequests;

    constructor(uint _underlineGoal, uint _underlineDeadline){
        goal = _underlineGoal;
        deadline = block.timestamp + _underlineDeadline;
        minimumContribution = 100 wei;
        admin = msg.sender;
    }

    modifier onlyAdmin(){
        require(msg.sender == admin,"Only admin allowed");
        _;
    }



    function contribute() public payable{
        require(block.timestamp < deadline,"Deadline Passed");
        require(msg.value > minimumContribution,"Minimum contribution is not met");

        if(contributors[msg.sender] == 0){
            numberOfContributors++;
        }

        contributors[msg.sender] += msg.value;

        raisedAmount+=msg.value;

        emit ContributeEvent(msg.sender,msg.value);
    }


    receive() payable external{
        contribute();
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function getRefund() public payable{
        require(block.timestamp > deadline && goal > raisedAmount);
        require(contributors[msg.sender] > 0);
        uint contri = contributors[msg.sender];
        contributors[msg.sender] = 0;
        payable((msg.sender)).transfer(contri);
    }


    function createRequestNew(string memory _description,address payable _recipient,uint _value) public onlyAdmin{
        Request storage newRequest = requests[numRequests];
        numRequests++;
        newRequest.description = _description;
        newRequest.recipient = _recipient;
        newRequest.value = _value;
        newRequest.completed = false;
        newRequest.noOfVoters = 0;

        emit createRequestNewEvent(_description,_recipient,_value);
    }

    function voteRequest(uint _requestNo) public{
        require(contributors[msg.sender] > 0,"You must be a contributor to vote");
        Request storage thisRequest = requests[_requestNo];
        require(thisRequest.voters[msg.sender] == false,"You already voted");
        thisRequest.voters[msg.sender] = true;
        thisRequest.noOfVoters++;
    }


    function makePayment(uint _requestNo) public onlyAdmin {
        Request storage thisRequest = requests[_requestNo];
        require(thisRequest.completed == false, "The request has been already completed!");
        
        require(thisRequest.noOfVoters > numberOfContributors / 2, "The request needs more than 50% of the contributors.");
        thisRequest.recipient.transfer(thisRequest.value);
        thisRequest.completed = true;
        
        emit MakePaymentEvent(thisRequest.recipient, thisRequest.value);
    }

}