import { LightningElement } from 'lwc';

export default class ModalComponent extends LightningElement {
    closeHandler() {
        //someone clicked on close button
        //create an event and dispatch the same to parent

        /* primitive data
        const closeEvent = new CustomEvent("close", {detail: "Close button was clicked!!"});
        this.dispatchEvent(closeEvent);
        */

       //non-primitive data
        let con = {
            Id: "123",
            Name: "Satya Nadella",
            Title: "Chief Execuitve Officer",
            Company: "Microsoft"
        };
        const closeEvent = new CustomEvent("close", {detail: con});
        this.dispatchEvent(closeEvent);
    }
}