const { I } = inject();

const pirmaMainPage = require("../pages/pirmaMainPage.js");

Given("el usuario está en la página principal", async () => {
  await pirmaMainPage.goToHome();
});

When("selecciona promocion del banner", async () => {
  await pirmaMainPage.ordenarPlayeraPorPrecio();
});

Then("ordena los productos por precios", async () => {
  console.log("Se ve la opcion para llenar los datos de la compra");
});


//Segundo caso
Given("el usuario está en la página principal", async () => {
  await pirmaMainPage.goToHome();
});

When("selecciona el boton de hombre y chamarras y sudaderas", async () => {
  await pirmaMainPage.hoverHombres();
});

Then("ordena los productos por talla", async () => {
  await pirmaMainPage.tallasChamarras();
});


