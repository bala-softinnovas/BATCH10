import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetObjectInfoContact extends LightningElement {

    contactRtId;

    @wire(getObjectInfo, {objectApiName: CONTACT_OBJECT})
    infoHandler({data, error}) {
        if(data) {
            console.log(data);
            this.contactRtId = data.defaultRecordTypeId;
        }
        if(error) {
            console.log(error);
        }
    }
}