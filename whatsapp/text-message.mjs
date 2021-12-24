
import { Message } from "./message.mjs";

// prototype::

// Group TextMessage derives from Message group
export class TextMessage extends Message{

    constructor(_body, _senderID, _receiverID, _timeStamp){
        super(_senderID, _receiverID, _timeStamp);
        this.body =_body; 
    }
}