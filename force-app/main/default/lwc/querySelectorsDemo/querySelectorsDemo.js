import { LightningElement } from 'lwc';

export default class QuerySelectorsDemo extends LightningElement {

    fruits = ["Banana", "Apple", "Orange", "Grape"];

    clickHandler() {
        //h1 - querySelector demo
        const h1elem = this.template.querySelector("h1");
        console.log(h1elem.innerText);
        h1elem.style.color = "#1a188c";
        h1elem.style.backgroundColor = "yellow";
        h1elem.style.border = "2px solid red";

        //p - querySelector demo
        const pelem = this.template.querySelector("p");
        console.log(pelem.innerText);
        pelem.style.color = "red";
        pelem.style.border = "2px solid green";
        pelem.style.backgroundColor = "#41f51d";

        //querySelectorAll demo
        const divElems = this.template.querySelectorAll("div.child");
        divElems.forEach(item => {
            console.log(item.innerText);
            item.style.color = "#41f51d";
            item.setAttribute("class", "slds-align_absolute-center");
        })
    }
}