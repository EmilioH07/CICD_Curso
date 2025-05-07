Feature: Comprar playeras en pirma

  Scenario: Agregar jersey al carrito e ir a pagar
    Given el usuario está en la página principal
    When selecciona promocion del banner
    Then ordena los productos por precios

 
  Scenario: Buscar chamarras para hombre de talla mediana
    Given el usuario está en la página principal
    When selecciona el boton de hombre y chamarras y sudaderas 
    Then ordena los productos por talla
  