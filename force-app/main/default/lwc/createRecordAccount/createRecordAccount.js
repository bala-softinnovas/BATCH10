import { LightningElement, track } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { createRecord } from 'lightning/uiRecordApi';

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
        this.template.querySelector("form.accountform").reset();
        this.formdata = {};
    }

    saveAccount() {
        //populate rating & priority based on revenue
        const revenue = Number(this.formdata.AnnualRevenue);
        if(revenue >= 100000000) {
            this.formdata["Rating"] = "Hot";
            this.formdata["CustomerPriority__c"] = "High";
        } else if(revenue < 100000000 && revenue >= 10000000) {
            this.formdata["Rating"] = "Warm";
            this.formdata["CustomerPriority__c"] = "Medium";
        } else {
            this.formdata["Rating"] = "Cold";
            this.formdata["CustomerPriority__c"] = "Low";
        }

        //log the object so far
        console.log("entered data: " + JSON.stringify(this.formdata));

        //prepare record input for create record
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields: this.formdata
        }

        //create record
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector("form.accountform").reset();
                this.formdata = {};
                //add toast message
            })
            .catch(error => {
                console.error(error);
            })
    }
}