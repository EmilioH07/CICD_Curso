const {I} = inject();
const { expect } = require("chai");

class cinepolisMainPage {
    constructor() {
        this.fields = {
          ciudad: '(//button[@class="mf-locations-minimal-trigger mf-locations-flex mf-locations-w-72 mf-locations-items-center mf-locations-rounded-lg mf-locations-px-5 mf-locations-py-[10px] mf-locations-bg-primary-100 mf-locations-text-grey-scale-20"])[1]',
          cdmx: '(//button[@class="mf-locations-flex mf-locations-w-full mf-locations-items-center mf-locations-rounded-lg mf-locations-px-5 mf-locations-py-[18px] mf-locations-transition-colors mf-locations-hover:bg-grey-scale-10"])[22]',
          perisur: '(//input[@class="mf-locations-peer mf-locations-absolute mf-locations-inset-0 mf-locations-block mf-locations-h-full mf-locations-w-full mf-locations-opacity-0"])[16]',
          boton: '//button[@class="mf-locations-apply-selection-button mf-locations-w-full mf-locations-rounded-lg mf-locations-py-4 mf-locations-text-sm mf-locations-font-bold mf-locations-bg-light-blue mf-locations-text-[#FDFDFD]"]',
          botonComida: '(//button[@class="flex justify-center items-center rounded-lg font-semibold text-sm hover:bg-active-state bg-transparent px-4 py-2 hover:text-cinepolis-primary-100"])[2]',
          fecha: '(//label[@class="mf-schedules-cursor-pointer mf-schedules-text-base mf-schedules-leading-[19px] mf-schedules-font-bold mf-schedules-tracking-[-1%] mf-schedules-text-cinepolis-primary-100"])[5]',
          horarioPelicula: '(//div[@class="mf-schedules-schedules-item mf-schedules-group mf-schedules-active:bg-light-blue mf-schedules-relative mf-schedules-justify-end mf-schedules-w-[31.6%] mf-schedules-sm:w-[23.3%] mf-schedules-md:w-[18.6%] mf-schedules-min-w-[98px] mf-schedules-xl:w-[15.5%] mf-schedules-desktop1536:w-[17.9%] mf-schedules-lg:w-[22%] mf-schedules-max-w-[184px] mf-schedules-cursor-pointer mf-schedules-h-11 mf-schedules-sm:h-14 mf-schedules-md:h-[60px] mf-schedules-lg:h-16 mf-schedules-rounded-lg mf-schedules-lg:rounded-2xl mf-schedules-border-[1px] mf-schedules-flex mf-schedules-flex-row-reverse mf-schedules-items-center mf-schedules-p-2 mf-schedules-lg:p-3 mf-schedules-xl:px-[14.5px] mf-schedules-tracking-[0.3px] mf-schedules-xl:py-[14.5px] mf-schedules-text-cinepolis-blue mf-schedules-border-cinepolis-blue-10"])[4]',
          seleccionaAsiento: '(//button[@class="mf-seats-col-[--gridCol] mf-seats-row-[--gridRow] mf-seats-flex mf-seats-aspect-[--aspectRatioWidth] mf-seats-w-full mf-seats-cursor-pointer mf-seats-appearance-none mf-seats-items-center mf-seats-justify-center mf-seats-rounded-[--borderRadius] mf-seats-text-[--fontColor] mf-seats-hover:border-bg-cinepolis-blue mf-seats-hover:shadow-md mf-seats-md:hover:border-light-blue mf-seats-border-[length:var(--borderSize)] mf-seats-border-solid mf-seats-border-[--borderColor] mf-seats-bg-[--bgColor]"])[106]',
          ciudadComida: '//label[@class="mf-locations-full-trigger mf-locations-relative mf-locations-flex mf-locations-w-full mf-locations-items-center mf-locations-border mf-locations-border-grey-scale-20 mf-locations-bg-[#FDFDFD] mf-locations-rounded-lg mf-locations-cursor-pointer"]',
          cdmxComida: '(//button[@class="mf-locations-flex mf-locations-w-full mf-locations-items-center mf-locations-rounded-lg mf-locations-px-5 mf-locations-py-[18px] mf-locations-transition-colors mf-locations-hover:bg-grey-scale-10"])[22]',
          perisurComida: '(//div[@class="mf-locations-flex mf-locations-flex-1 mf-locations-flex-col mf-locations-items-start mf-locations-gap-2"])[15]',
          palomitas: '(//div[@class="mf-foods-menu-p-2 mf-foods-menu-grow mf-foods-menu-flex mf-foods-menu-flex-col mf-foods-menu-justify-between"])[1]',
          agregarPalomitas: '//div[@class="smooth-corners smooth-corners-horizontal-lg flex items-center justify-center font-base font-bold text-base transition-all text-center bg-light-blue text-white h-16 px-16 smooth-corners-loaded"]',
          peliculas: '(//button[@class="flex justify-center items-center rounded-lg font-semibold text-sm hover:bg-active-state bg-transparent px-4 py-2 hover:text-cinepolis-primary-100"])[1]',
          verTrailer: '//button[@class="mf-movie-detail-bg-transparent mf-movie-detail-border mf-movie-detail-py-[19px] mf-movie-detail-text-center mf-movie-detail-md:py-3 mf-movie-detail-lg:py-5 mf-movie-detail-rounded-2xl mf-movie-detail-border-white mf-movie-detail-border-opacity-30 mf-movie-detail-flex mf-movie-detail-items-center mf-movie-detail-gap-2 mf-movie-detail-justify-center mf-movie-detail-w-full mf-movie-detail-md:w-40 mf-movie-detail-lg:w-[190px] mf-movie-detail-xl:w-[230px]"]',

        };
    }

    async goToHome(){
        await I.amOnPage("https://cinepolis.com/mx");
        I.wait(2);
    }


    async seleccionCine(){
        await I.waitForElement(this.fields.ciudad, 10);
        await I.waitForElement(this.fields.cdmx, 10);
        await I.click(this.fields.ciudad);
        await I.click(this.fields.cdmx);
    }

    async seleccionPerisur(){
        await I.waitForElement(this.fields.perisur, 10);
        await I.click(this.fields.perisur);
        await I.click(this.fields.boton);
    }

    async seleccionaFecha(){
        await I.waitForElement(this.fields.fecha, 10);
        await I.click(this.fields.fecha);
    }

    async seleccionaHorario(){
        await I.waitForElement(this.fields.horarioPelicula, 10);
        await I.click(this.fields.horarioPelicula);
    }

    //Segundo caso
    async goToFood(){
        await I.amOnPage("https://cinepolis.com/mx/solo-alimentos?cinema=");
    }

    async selectCityFood(){
        await I.waitForElement(this.fields.ciudadComida, 10);
        await I.click(this.fields.ciudadComida);
        await I.click(this.fields.cdmxComida);
        await I.click(this.fields.perisurComida);
    }

    async seleccionaPalomitas(){
        await I.waitForElement(this.fields.palomitas, 5);
        await I.click(this.fields.palomitas);
        await I.click(this.fields.agregarPalomitas);
    }

    //Tercer caso
    async seleccionaThunderbolts(){
        await I.amOnPage("https://cinepolis.com/mx/detalle?movie=thunderbolts");
    }

    async seleccionaVerTrailer(){
        await I.waitForElement(this.fields.verTrailer, 10);
        await I.click(this.fields.verTrailer);
    }

    
}

module.exports = new cinepolisMainPage();