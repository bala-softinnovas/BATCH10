import { APPLICATION_SCOPE, MessageContext, publish, subscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SAMPLE_MC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class LmsWebComponent extends LightningElement {
    messageReceived;
    messageValue;

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeLms();
    }

    changeHandler(event) {
        this.messageValue = event.target.value;
    }

    clickHandler() {
        const message = {
            lmsData: {
                value: this.messageValue
            }
        };
        publish(this.context, SAMPLE_MC, message);
    }

    subscribeLms() {
        subscribe(this.context, SAMPLE_MC, (message) => { this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        if(message) {
            this.messageReceived = message.lmsData.value;
        }
    }
}