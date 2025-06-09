// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmailContract {
    struct Email {
        address from;
        address to;
        string subject;
        string content;
        uint256 timestamp;
        bool read;
        bool encrypted;
        bytes32 hash;
    }

    mapping(address => Email[]) public inboxes;
    mapping(address => Email[]) public sent;
    mapping(address => address[]) public spamFilters;
    uint256 public maxEmailsPerUser = 1000;

    event EmailSent(address indexed from, address indexed to, string subject);
    event EmailRead(address indexed user, uint256 index);
    event EmailDeleted(address indexed user, uint256 index);
    event SpamAddressAdded(address indexed user, address indexed spammer);
    event SpamAddressRemoved(address indexed user, address indexed spammer);

    function sendEmail(address to, string memory subject, string memory content) public returns (bool) {
        require(to != address(0), "Invalid recipient address");
        
        // Check spam
        if (spamFilters[to].length > 0) {
            for (uint i = 0; i < spamFilters[to].length; i++) {
                require(spamFilters[to][i] != msg.sender, "Sender is in spam list");
            }
        }

        // Check email limit
        require(inboxes[to].length < maxEmailsPerUser, "Recipient inbox is full");

        uint256 timestamp = block.timestamp;
        bytes32 contentHash = keccak256(bytes(content));

        Email memory email = Email({
            from: msg.sender,
            to: to,
            subject: subject,
            content: content,
            timestamp: timestamp,
            read: false,
            encrypted: false,
            hash: contentHash
        });

        inboxes[to].push(email);
        sent[msg.sender].push(email);

        emit EmailSent(msg.sender, to, subject);
        return true;
    }

    function getInbox() public view returns (Email[] memory) {
        return inboxes[msg.sender];
    }

    function getSent() public view returns (Email[] memory) {
        return sent[msg.sender];
    }

    function markAsRead(uint256 index) public returns (bool) {
        require(index < inboxes[msg.sender].length, "Invalid email index");
        inboxes[msg.sender][index].read = true;
        emit EmailRead(msg.sender, index);
        return true;
    }

    function deleteEmail(uint256 index) public returns (bool) {
        require(index < inboxes[msg.sender].length, "Invalid email index");
        
        // Move the last email to the deleted position
        inboxes[msg.sender][index] = inboxes[msg.sender][inboxes[msg.sender].length - 1];
        inboxes[msg.sender].pop();
        
        emit EmailDeleted(msg.sender, index);
        return true;
    }

    function addToSpam(address spammer) public returns (bool) {
        require(spammer != address(0), "Invalid spammer address");
        
        // Check if already in spam list
        for (uint i = 0; i < spamFilters[msg.sender].length; i++) {
            if (spamFilters[msg.sender][i] == spammer) {
                return false;
            }
        }
        
        spamFilters[msg.sender].push(spammer);
        emit SpamAddressAdded(msg.sender, spammer);
        return true;
    }

    function removeFromSpam(address addressToRemove) public returns (bool) {
        for (uint i = 0; i < spamFilters[msg.sender].length; i++) {
            if (spamFilters[msg.sender][i] == addressToRemove) {
                spamFilters[msg.sender][i] = spamFilters[msg.sender][spamFilters[msg.sender].length - 1];
                spamFilters[msg.sender].pop();
                emit SpamAddressRemoved(msg.sender, addressToRemove);
                return true;
            }
        }
        return false;
    }

    function getSpamList() public view returns (address[] memory) {
        return spamFilters[msg.sender];
    }

    function verifyEmailIntegrity(uint256 index) public view returns (bool) {
        require(index < inboxes[msg.sender].length, "Invalid email index");
        Email memory email = inboxes[msg.sender][index];
        return email.hash == keccak256(bytes(email.content));
    }
} 