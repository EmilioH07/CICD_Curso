const {I} = inject();
const { expect } = require("chai");

class pirmaMainPage {
    constructor() {
        this.fields = {
          flecha: '(//li[@class="color-6"])[2]',
          carrousel: '(//button[@class="bg-transparent border-0 position-absolute pointer h-100 w-100"])[3]',
          botonOrdenar: '//button[@class="btn btn-block rounded-0 font-12 px-4"]',
          ordenarMenorMayor: '(//a[@class="dropdown-item px-4 py-2"])[2]',

          botonHombre: '(//a[@class="pointer position-static font-rem-16 zindex-100 headerMenuItem py-3 px-4 d-flex align-items-center"])[1]',
          botonChamarras: '(//a[@class="color-6 headerMenuThirdItem"])[10]',
          tallaChamarras: '(//button[@class="d-flex pb-2 align-items-center w-100 justify-content-between pb-3 collapsed"])[1]',
          tallaM: '(//input[@class="regular-checkbox mr-2"])[2]',
        };
    }

    async goToHome(){
        await I.amOnPage("https://pirma.com.mx/");
        I.wait(2);
    }


    async ordenarPlayeraPorPrecio() {
        await I.waitForElement(this.fields.flecha, 5);
        await I.click(this.fields.flecha);
        await I.click(this.fields.carrousel);
    
        await I.click(this.fields.botonOrdenar);
        await I.click(this.fields.ordenarMenorMayor);
    }

    async hoverHombres(){
        await I.moveCursorTo(this.fields.botonHombre);
        await I.wait(1);
        await I.click(this.fields.botonChamarras);
    }

    async tallasChamarras(){
        await I.click(this.fields.tallaChamarras);
        await I.click(this.fields.tallaM);
    }
    

    

}

module.exports = new pirmaMainPage();