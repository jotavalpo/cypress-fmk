Feature: Flujo de compra

  Escenario para realizar compra de dos productos
  
  @test
  Scenario: Realizar compra
    Given Abro la pagina de Demoblaze
    When Selecciono la categoría de monitores
    And Selecciono el primer producto
    And Veo el detalle del producto
    And Hago clic en el botón agregar al carrito
    And El primer producto es agregado exitosamente
    And Selecciono el segundo producto
    And Veo el detalle del producto
    And Hago clic en el botón agregar al carrito
    And El segundo producto es agregado exitosamente
    And Hago clic en el carrito de compras
    And Verifico que se despliege correctamente el carrito de compras
    And Hago clic en el botón de orden
    And Lleno el formulario para completar orden
    And Confirmo la orden
    Then La orden se realiza correctamente         