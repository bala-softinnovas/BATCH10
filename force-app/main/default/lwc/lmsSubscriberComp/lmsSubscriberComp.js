import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SI_MC from '@salesforce/messageChannel/SoftInnovas__c';

export default class LmsSubscriberComp extends LightningElement {
    messageReceived;

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeHandler();
    }

    subscribeHandler() {
        subscribe(
            this.context,
            SI_MC,
            (message) => { this.messageHandler(message) },
            {scope: APPLICATION_SCOPE}
        );
        console.log("Subscibed to the message channel!");
    }

    messageHandler(message) {
        console.log("Message reached the subscriber...");
        console.log(message);
        this.messageReceived = message;
    }
}