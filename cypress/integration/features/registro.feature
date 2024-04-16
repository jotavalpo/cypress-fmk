Feature: Registrarse como usuario en Demoblaze

  Escenarios de registro de usuario
  
  @test
  Scenario: Registro de usuario válido
    Given Navego al home de Demoblaze
    When Hago clic en la opción para registrarse como usuario
    And Ingreso los datos requeridos correctamente para el registro
    And Hago clic en botón para crear el usuario
    Then El usuario es creado exitosamente

  @test
  Scenario: Registro de usuario inválido
    Given Navego al home de Demoblaze
    When Hago clic en la opción para registrarse como usuario
    And Ingreso los datos requeridos incorrectamente para el registro
    And Hago clic en botón para crear el usuario
    Then El usuario no se crea y se despliega mensaje de error