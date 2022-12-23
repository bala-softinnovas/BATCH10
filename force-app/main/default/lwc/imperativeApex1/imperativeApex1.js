import getTopAccounts from '@salesforce/apex/AccountCtrl.getTopAccounts';
import { LightningElement } from 'lwc';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class ImperativeApex1 extends LightningElement {
    accounts;
    columns = COLUMNS;
    
    fetchAccounts() {
        getTopAccounts()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                console.error(error);
            })
    }

    hideAccounts() {
        this.accounts = undefined;
    }
}