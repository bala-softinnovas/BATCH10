import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {

    clickHandler() {
        //create an event and dispatch the same
        console.log("Before creating the event!");
        const showEvent = new CustomEvent("show", {bubbles: false, composed: true});
        this.dispatchEvent(showEvent);
        console.log("Created and dispatched the event!");
    }
}