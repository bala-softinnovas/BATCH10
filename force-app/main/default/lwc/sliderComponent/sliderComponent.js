import { LightningElement } from 'lwc';

export default class SliderComponent extends LightningElement {

    value;

    changeHandler(event) {
        this.value = event.target.value;
    }

    resetHandler() {
        this.template.querySelector("c-slider").resetSlider();
    }
}