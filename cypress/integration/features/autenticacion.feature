Feature: Autenticacion en la pagina de Demoblaze

  Distintos escenarios para iniciar sesión
  
  @test
  Scenario: Inicio de sesión válido
    Given Abro la página de login de Demoblaze
    When Hago clic en el botón login
    And Ingreso los datos correctos para iniciar sesión
    And Hago clic en el botón para iniciar la sesión
    Then Se inicia la sesión exitosamente

  @test
  Scenario: Inicio de sesión inválido
    Given Abro la página de login de Demoblaze
    When Hago clic en el botón login
    And Ingreso los datos incorrectos para iniciar sesión
    And Hago clic en el botón para iniciar la sesión
    Then La sesión no es iniciada y se despliega error  