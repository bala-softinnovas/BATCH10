import { LightningElement } from 'lwc';

import AIRLINES_OBJECT from '@salesforce/schema/Airlines__c';
import NAME_FIELD from '@salesforce/schema/Airlines__c.Name';
import COUNTRY_FIELD from '@salesforce/schema/Airlines__c.Country__c';
import SLOGAN_FIELD from '@salesforce/schema/Airlines__c.Slogan__c';
import HQ_FIELD from '@salesforce/schema/Airlines__c.Head_Quarters__c';
import EST_FIELD from '@salesforce/schema/Airlines__c.Established__c';

export default class RecordEditFormAirlines extends LightningElement {
    recordId = "a085h00000H1OUNAA3";
    objectName = AIRLINES_OBJECT;
    fields = {
        name: NAME_FIELD,
        country: COUNTRY_FIELD,
        slogan: SLOGAN_FIELD,
        hq: HQ_FIELD,
        est: EST_FIELD
    };
}