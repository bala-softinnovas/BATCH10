import getMatchingContacts from '@salesforce/apex/ContactCtrl.getMatchingContacts';
import { LightningElement } from 'lwc';

export default class ImperativeApex3 extends LightningElement {

    contacts;
    error;

    searchHandler(event) {
        const searchWord = event.target.value;
        getMatchingContacts({searchKey: searchWord})
            .then(result => {
                if(result.length > 0) {
                    this.contacts = result;
                    this.error = undefined;
                } else {
                    this.contacts = undefined;
                    this.error = "Hey, System could not find any matching contacts for the entered search key. Try using different search keys";
                }
            })
            .catch(error => {
                this.contacts = undefined;
                this.error = error.body.message;
            })
    }
}