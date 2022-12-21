import getRecentLeads from '@salesforce/apex/LeadCtrl.getRecentLeads';
import { LightningElement, wire } from 'lwc';

export default class WiredApex3 extends LightningElement {

    @wire(getRecentLeads)
    leads;
}