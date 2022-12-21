import getMatchingOpps from '@salesforce/apex/OpportunityCtrl.getMatchingOpps';
import { LightningElement, wire } from 'lwc';

const COLUMNS = [
    {label: "Opp Name", fieldName: "Name", type: "text"},
    {label: "Opp Type", fieldName: "Type", type: "text"},
    {label: "Stage", fieldName: "StageName", type: "text"},
    {label: "Amount", fieldName: "Amount", type: "currency"}
];

export default class WiredApex2 extends LightningElement {

    stageName = "Prospecting";
    columns = COLUMNS;

    @wire(getMatchingOpps, {stage: '$stageName'})
    opps;
}