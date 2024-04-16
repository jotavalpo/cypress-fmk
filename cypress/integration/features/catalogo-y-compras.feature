Feature: Navegar por los productos del sitio

  Escenarios de navegación de productos
  
  @test
  Scenario: Navegación por categorías
    Given Abro la pagina de Demoblaze e inicio sesión
    When Me mantengo en el home del sitio
    And Selecciono la categoría de monitores
    Then Selecciono uno de los productos

  @test
  Scenario: Agregar producto al carrito
    Given Abro la pagina de Demoblaze e inicio sesión
    When Me mantengo en el home del sitio
    And Selecciono la categoría de monitores
    And Selecciono uno de los productos
    And Veo el detalle del producto
    And Hago clic en el botón agregar al carrito
    Then El producto es agregado exitosamente y eliminado
    
  @test
  Scenario: Realizar una compra
    Given Abro la pagina de Demoblaze e inicio sesión
    When Me mantengo en el home del sitio
    And Selecciono la categoría de monitores
    And Selecciono uno de los productos
    And Veo el detalle del producto
    And Hago clic en el botón agregar al carrito
    And El producto es agregado exitosamente
    And Hago clic en el carrito de compras
    And Verifico que se despliege correctamente el carrito de compras
    And Hago clic en el botón de orden
    And Lleno el formulario para completar orden
    And Confirmo la orden
    Then La orden se realiza correctamente         