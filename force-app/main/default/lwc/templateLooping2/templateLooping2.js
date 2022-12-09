import { LightningElement } from 'lwc';

export default class TemplateLooping2 extends LightningElement {
    accounts = [
        {
            Id: "1",
            Name: "Soft Innovas",
            Industry: "Education",
            Rating: "Hot"
        },
        {
            Id: "2",
            Name: "Universal Containers",
            Industry: "Software",
            Rating: "Cold"
        },
        {
            Id: "3",
            Name: "Mahendra",
            Industry: "Hardware",
            Rating: "Warm"
        }
    ];    
}