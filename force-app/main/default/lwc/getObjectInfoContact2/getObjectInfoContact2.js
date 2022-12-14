import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetObjectInfoContact2 extends LightningElement {

    employeeRtId;
    studentRtId;

    @wire(getObjectInfo, {objectApiName: CONTACT_OBJECT})
    infoHandler({data, error}) {
        if(data) {
            console.log(data);
            this.studentRtId = data.defaultRecordTypeId;
            const rtids = data.recordTypeInfos;
            this.employeeRtId = Object.keys(rtids).find(rtid => rtids[rtid].name === "Employee Contact");
        }
        if(error) {
            console.error(error);
        }
    }
}