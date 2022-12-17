import { LightningElement, track } from 'lwc';

export default class CreateRecordAccount extends LightningElement {

    @track formdata = {};
    /* Aim is to prepare data in this format
    formdata = {
        Name: "Test Account",
        Industry: "Biotechnology",
        AnnualRevenue: 100000000
    }*/

    changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.formdata[name] = value;
    }

    cancelAccount() {

    }

    saveAccount() {
        console.log("entered data: " + JSON.stringify(this.formdata));
    }
}