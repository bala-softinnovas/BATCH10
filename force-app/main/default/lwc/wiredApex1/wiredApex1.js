import getTopAccounts from '@salesforce/apex/AccountCtrl.getTopAccounts';
import { LightningElement, wire } from 'lwc';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class WiredApex1 extends LightningElement {

    columns = COLUMNS;

    @wire(getTopAccounts)
    accounts;
}