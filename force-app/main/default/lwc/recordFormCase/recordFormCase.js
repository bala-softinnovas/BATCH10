import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CASE_OBJECT from '@salesforce/schema/Case';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import CONTACT_FIELD from '@salesforce/schema/Case.ContactId';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESC_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import TYPE_FIELD from '@salesforce/schema/Case.Type';

export default class RecordFormCase extends LightningElement {
    recordId = "5005h00000dHNT9AAO";
    objectName = CASE_OBJECT;
    fields = [ACCOUNT_FIELD, CONTACT_FIELD, SUBJECT_FIELD, DESC_FIELD, PRIORITY_FIELD, TYPE_FIELD];

    successHandler() {
        const successEvent = new ShowToastEvent({
            title: "Success",
            message: "Case has been saved successfully!",
            variant: "success"
        });
        this.dispatchEvent(successEvent);
    }
}