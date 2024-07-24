# cypress-fmk

1. Instalación de prerequisitos

	1.1 Instalar el entorno de desarrrollo (IDE)
		- En este caso Visual Studio Code https://code.visualstudio.com/download

	1.2 Instalar Node.js desde web oficial https://nodejs.org/en/download/package-manager

2. Instalación y configuración de Cypress

	2.1 Inicializar Node.js con el comando "npm init -y"
	2.2 Instalar Cypress con el comando "npm install cypress@12.13.0" el cual instala esta versión por defecto que es en la que está construido el framework. También se puede instalar solo con "npm install cypress". Considerar que la última versión puede tener ciertas incompatibilidades con el proyecto (por ejemplo, allure report)
	2.3 Configurar Cypress con el comando cypress open
		- Dar clic en continuar
		- Seleccionar browser y clic en start
	2.4 Descargar proyecto y abrirlo desde Visual Studio Code
		
3. Ejecutar pruebas

	3.1 Pruebas api
	    - Instalar modulo de api con comando "npm i cypress-plugin-api"
		- Ir al archivo package.json y validar que esté la dependencia "cypress-plugin-api"
		- Ir a la carpeta "support" y luego entrar al archivo "e2e.js", donde debe agregarse la importación import "cypress-plugin-api"
		- Para ejecutar los test ejecutar el script ""
	Ejecutar el comando "npm run test" donde test corresponde al script configurado para ejecutar las pruebas. Para mayor
	detalle revisar el archivo "package.json" 