import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SI_MC from '@salesforce/messageChannel/SoftInnovas__c';

export default class LmsPublisherComp extends LightningElement {
    messageValue;

    @wire(MessageContext)
    context;

    changeHandler(event) {
        this.messageValue = event.target.value;
    }

    publishHandler() {
        const message = {
            lmsData: {
                value: this.messageValue,
                name: "message",
                type: "Entered manually by the user!"
            }
        };
        console.log("About to publish a message");
        console.log(message);
        publish(this.context, SI_MC, message);
        console.log("Published the message successfully!");
    }
}