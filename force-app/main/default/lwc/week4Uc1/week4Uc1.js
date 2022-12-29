import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPP_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import getTotalAmount from '@salesforce/apex/OpportunityCtrl.getTotalAmount';

export default class Week4Uc1 extends LightningElement {

    stageOptions = [];
    error;
    total;

    @wire(getObjectInfo, {objectApiName: OPP_OBJECT})
    oppInfo;

    @wire(getPicklistValues, {fieldApiName: STAGE_FIELD, recordTypeId: '$oppInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}) {
        if(data) {
            this.stageOptions = data.values;
        }
        if(error) {
            this.error = error;
        }
    }

    changeHandler(event) {
        const selectedStage = event.target.value;
        getTotalAmount({stage: selectedStage})
            .then(result => {
                if(result > 0) {
                    this.total = result;
                    this.error = undefined;
                } else {
                    this.error = "There are no matching opportunities for the selected stage. Please select another";
                    this.total = undefined;
                }
            })
            .catch(error => {
                this.error = error.body.message;
                this.total = undefined;
            })
    }
}