import getRecentLeads from '@salesforce/apex/LeadCtrl.getRecentLeads';
import { LightningElement } from 'lwc';

const COLUMNS = [
    {label: "First Name", fieldName: "FirstName", type:"text"},
    {label: "Last Name", fieldName: "LastName", type:"text"},
    {label: "Title", fieldName: "Title", type:"text"},
    {label: "Company", fieldName: "Company", type:"text"}
];

export default class Week4Uc2 extends LightningElement {

    leads;
    error;
    columns = COLUMNS;

    getLeads() {
        if(this.leads || this.error) {
            this.leads = undefined;
            this.error = undefined;
        } else {
            getRecentLeads()
                .then(result => {
                    this.leads = result;
                })
                .catch(error => {
                    this.error = error;
                })
        }
    }
}