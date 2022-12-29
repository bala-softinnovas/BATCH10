import { LightningElement, wire } from 'lwc';
import SAMPLE_MC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext, publish, subscribe } from 'lightning/messageService';

export default class LmsWebComponentA extends LightningElement {
    messageValue;
    messageReceived = "No message received yet!";

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeHandler();
    }

    subscribeHandler() {
        subscribe(
            this.context,
            SAMPLE_MC,
            (message) => { this.messageHandler(message) },
            { scope: APPLICATION_SCOPE }
        )
    }

    messageHandler(message) {
        if(message) {
            this.messageReceived = message.lmsData.value;
        }
    }

    changeHandler(event) {
        this.messageValue = event.target.value;
    }

    publishHandler() {
        let message = {
            lmsData: {
                value: this.messageValue
            }
        };
        console.log("we are about to publish a message!");
        console.log(message);
        publish(this.context, SAMPLE_MC, message);
    }
}