import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class GetRecordAccount extends LightningElement {
    recordId = "0015h000013lYQwAAM";
    name;
    type;
    revenue;
    phone;

    @wire(getRecord, {recordId: '$recordId', layoutTypes: ['Full'], modes: ['View']})
    recordHandler({data, error}) {
        if(data) {
            console.log(data);
            this.name = getFieldValue(data, NAME_FIELD);
            this.type = getFieldValue(data, TYPE_FIELD); //data.fields.Type.value;
            this.revenue = getFieldDisplayValue(data, REVENUE_FIELD); //data.fields.AnnualRevenue.displayValue;
            this.phone = getFieldValue(data, PHONE_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }
}