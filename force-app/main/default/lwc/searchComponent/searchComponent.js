import getMatchingContacts from '@salesforce/apex/ContactCtrl.getMatchingContacts';
import { LightningElement } from 'lwc';

const COLUMNS = [
    {label: "First Name", fieldName: "FirstName", type: "text"},
    {label: "Last Name", fieldName: "LastName", type: "text"},
    {label: "Title", fieldName: "Title", type: "text"},
    {label: "Department", fieldName: "Department", type: "text"}
];

export default class SearchComponent extends LightningElement {

    contacts;
    columns = COLUMNS;
    error;

    searchHandler(event) {
        const searchWord = event.target.value;

        if(searchWord.length == 0) {
            this.contacts = undefined;
        } else {
            getMatchingContacts({searchKey: searchWord})
                .then(result => {
                    if(result.length == 0) {
                        this.contacts = undefined;
                        this.error = "Please use some other search criteria";
                    } else {
                        this.contacts = result;
                        this.error = undefined;
                    }
                })
                .catch(error => {
                    this.error = error.body.message;
                    this.contacts = undefined;
                })
        }
    }
}