
import { TextMessage } from "./textmessage.mjs";
import { MessageSender } from "./message-sender.mjs";

// User Group

class user{
    

    constructor(_id, _name, _profilepic, _bio, _address){
        this.id = _id;
        this.name = _name;
        this.profilepic = _profilepic;
        this.bio = _bio;
        this.status = _address;

    }

// TO send a message using MessageSender

    sendMessage(){

        // // 1. CREATING MESSAGE

       var message = new TextMessage("Test Message", 1, 2 , new Date());

        // // 2.CREATING MESSAGE SENDER

       var sender = new MessageSender();

        // // 3.SENDS MESSAGE

        sender.send(message);
        console.log(message.body);
        console.log(this.address);
        console.log("Message sent");
    }
}  

// Creating object( 1 instance of group)

var user = new user(1, "Dheeraj", "pic.jpg", "Test", "India");
user.sendMessage();

