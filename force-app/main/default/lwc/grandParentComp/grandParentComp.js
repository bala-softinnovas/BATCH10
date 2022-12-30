import { LightningElement } from 'lwc';

export default class GrandParentComp extends LightningElement {
    showHandler(event) {
        console.log("Received show event at grand parent comp!");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }
}