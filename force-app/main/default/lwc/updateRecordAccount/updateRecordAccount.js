import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import IMP_FIELD from '@salesforce/schema/Account.Important__c';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ThirdSicDesc from '@salesforce/schema/DandBCompany.ThirdSicDesc';

const FIELDS = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, REVENUE_FIELD, IMP_FIELD];

export default class UpdateRecordAccount extends LightningElement {
    recordId = "0015h0000199yceAAA";
    typeOptions = [];
    industryOptions = [];
    @track formdata = {};

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    account;

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accInfo;

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, recordTypeId: '$accInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}) {
        if(data) {
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
        }
        if(error) {
            console.error(error);
        }
    }

    changeHandler(event) {
        if(event.target.label === "Important?") {
            const name = event.target.name;
            const value = event.target.checked;
            this.formdata[name] = value;
        } else {
            const name = event.target.name;
            const value = event.target.value;
            this.formdata[name] = value;
        }        
    }

    saveAccount() {
        this.formdata["Id"] = this.recordId;
        const recordInput = {
            fields: this.formdata
        };

        updateRecord(recordInput)
            .then(result => {
                console.log(result);
                const toast = new ShowToastEvent({
                    title: "Success",
                    message: "Record has been saved successfully!",
                    variant: "success"
                });
                this.dispatchEvent(toast);
            })
            .catch(error => {
                console.log(error);
            })
    }
}