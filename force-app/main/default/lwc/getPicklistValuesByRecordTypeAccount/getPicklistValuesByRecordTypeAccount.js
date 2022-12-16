import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordTypeAccount extends LightningElement {

    accountRtId;
    industryOptions = [];
    typeOptions = [];
    selectedIndustry;
    selectedType;

    changeHandler(event) {
        if(event.target.label === "Select Industry") {
            this.selectedIndustry = event.target.value;
        } else {
            this.selectedType = event.target.value;
        }
    }

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    infoHandler({data, error}) {
        if(data) {
            this.accountRtId = data.defaultRecordTypeId;
        }
        if(error) {
            console.error(error);
        }
    }

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, recordTypeId: '$accountRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
        }
        if(error) {
            console.error(error);
        }
    }
}