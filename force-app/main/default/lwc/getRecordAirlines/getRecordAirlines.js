import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

export default class GetRecordAirlines extends LightningElement {
    recordId = "a085h00000H1OUNAA3";
    airlines;

    @wire(getRecord, {recordId: '$recordId', layoutTypes: ['Full'], modes: ['View']})
    recordHandler({data, error}) {
        if(data) {
            console.log(data);
            this.airlines = data;
        }
        if(error) {
            console.error(error);
        }
    }

}