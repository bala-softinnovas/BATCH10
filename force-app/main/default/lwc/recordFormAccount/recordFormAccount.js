import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class RecordFormAccount extends LightningElement {
    fields = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, REVENUE_FIELD];
    objectName = ACCOUNT_OBJECT;
    recordId = "0015h000018AiTpAAK";

    successHandler() {
        const sucessEvent = new ShowToastEvent({
            title: "Success",
            message: "Account record has been saved successfully!",
            variant: "success",
            mode: "sticky"
        });
        this.dispatchEvent(sucessEvent);
    }
}