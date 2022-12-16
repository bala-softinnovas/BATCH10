import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import AUTHOR_FIELD from '@salesforce/schema/Blog__c.Author__c';
import NAME_FIELD from '@salesforce/schema/Blog__c.Name';
import BODY_FIELD from '@salesforce/schema/Blog__c.Body__c';
import TITLE_FIELD from '@salesforce/schema/Blog__c.Title__c';
import TOPIC_FIELD from '@salesforce/schema/Blog__c.Topic__c';

const FIELDS = [AUTHOR_FIELD, NAME_FIELD, BODY_FIELD, TITLE_FIELD, TOPIC_FIELD];

export default class GetRecordBlog extends LightningElement {
    recordId = "a025h00000hCLySAAW";
    author;
    name;
    body;
    title;
    topic;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    recordHandler({data, error}) {
        if(data) {
            console.log(data);
            this.author = getFieldValue(data, AUTHOR_FIELD);
            this.name = getFieldValue(data, NAME_FIELD);
            this.body = getFieldValue(data, BODY_FIELD);
            this.title = getFieldValue(data, TITLE_FIELD);
            this.topic = getFieldValue(data, TOPIC_FIELD);
        }
        if(error) {
            console.error(error);
        }
    }
}