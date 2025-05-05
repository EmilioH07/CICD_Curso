const { I } = inject();

const cinepolisMainPage = require("../pages/cinepolisMainPage.js");

Given("el usuario está en la página principal", async () => {
  await cinepolisMainPage.goToHome();
});

When("selecciona la ciudad CDMX - Sur", async () => {
  await cinepolisMainPage.seleccionCine();
});

When("selecciona el cine Cinépolis Perisur", async () => {
  await cinepolisMainPage.seleccionPerisur();
});

Then("debería ver la cartelera de ese cine", async () => {
  console.log("Se ve la cartelera para cinepolis Perisur");
});


//Segundo caso

Given("el usuario está en la página de comida", async () => {
  await cinepolisMainPage.goToFood();
});

When("selecciona palomitas", async () => {
  await cinepolisMainPage.selectCityFood();
});

Then("agrega palomitas al carrito", async () => {
  await cinepolisMainPage.seleccionaPalomitas();
});

//Tercer caso
Given("el usuario está en la pelicula Thunderbolts", async () => {
  await cinepolisMainPage.seleccionaThunderbolts();
});

When("selecciona el boton de ver trailer", async () => {
  await cinepolisMainPage.seleccionaVerTrailer();
});

Then("se debe mostrar el trailer", async () => {
  console.log("Mostrando Trailer");
});
