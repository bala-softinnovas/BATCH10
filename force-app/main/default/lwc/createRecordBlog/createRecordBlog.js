import { LightningElement, track } from 'lwc';
import BLOG_OBJECT from '@salesforce/schema/Blog__c';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecordBlog extends LightningElement {
    @track formdata = {};

    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
    }

    cancelBlog() {
        this.template.querySelector("form.blogform").reset();
        this.formdata = {};
    }

    saveBlog() {
        //prepare record input
        const recordInput = {
            apiName: BLOG_OBJECT.objectApiName,
            fields: this.formdata
        };
        //create blog record
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                const successToast = new ShowToastEvent({
                    title: "Success",
                    message: "Blog has been saved successfully",
                    variant: "success"
                });
                this.dispatchEvent(successToast);
                this.cancelBlog();
            })
            .catch(error => {
                console.error(error);
            })
    }
}