Feature: Comprar boletos en el sitio de Cinépolis

  Scenario: Selección de ciudad y cine
    Given el usuario está en la página principal
    When selecciona la ciudad CDMX - Sur
    And selecciona el cine Cinépolis Perisur
    Then debería ver la cartelera de ese cine

  Scenario: Agregar palomitas al carrito
    Given el usuario está en la página de comida
    When selecciona palomitas
    Then agrega palomitas al carrito

  Scenario: Ver avance de la peli Thunderbolts
   Given el usuario está en la pelicula Thunderbolts
   When selecciona el boton de ver trailer
   Then se debe mostrar el trailer

  # Scenario: Simulación de proceso de compra
  #   Given el usuario ya seleccionó asientos
  #   When presiona continuar y completa los datos requeridos
  #   Then debería llegar a la pantalla de pago con un resumen de su compra

  # Scenario: Selección de asiento ocupado
  #   Given el usuario está en el mapa de asientos
  #   When intenta seleccionar un asiento marcado como ocupado
  #   Then debería ver un mensaje indicando que el asiento no está disponible

  