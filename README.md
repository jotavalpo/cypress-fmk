# cypress-fmk

1. Instalación de prerequisitos

1.1 Instalar el entorno de desarrrollo (IDE) - En este caso Visual Studio Code https://code.visualstudio.com/download

1.2 Instalar Node.js desde web oficial https://nodejs.org/en/download/package-manager


2. Instalación y configuración de Cypress

2.1 Desde la consola de Visual Studio Code inicializar Node.js con el comando "npm init -y" 

2.2 Instalar Cypress con el comando "npm install cypress@12.13.0" el cual instala esta versión por defecto que es en la que está construido el framework. También se puede instalar solo con "npm install cypress". Considerar que la última versión puede tener ciertas incompatibilidades con el proyecto (por ejemplo, allure report) 

2.3 Configurar Cypress con el comando "cypress open"

 - Dar clic en continuar 
 
 - Seleccionar browser y clic en start 
 
 - Descargar proyecto y abrirlo desde Visual Studio Code

 - Pararse en branch devsu/test-automation la cual tiene las pruebas de ambos requerimientos (e2e y api)


3. Ejecutar pruebas

3.1 Pruebas api 

- Instalar modulo de api con comando "npm i cypress-plugin-api" 

- Ir al archivo package.json y validar que esté la dependencia "cypress-plugin-api" 

- Ir a la carpeta "support" y luego entrar al archivo "e2e.js", donde debe agregarse la importación import "cypress-plugin-api" 

- Para ejecutar los test por consola, escribir "npm run test-api", donde test-api corresponde al script configurado para ejecutar las pruebas. Para más información, ver el archivo "package.json" 

3.2 Pruebas web 

Para ejecutar los test por consola, escribir "npm run test-web" donde test-web corresponde al script configurado para ejecutar las pruebas. Para más información, ver el archivo "package.json"

3.3 Probar todo 

Para ejecutar todos los test por consola, escribir "npm run probar-todo". Para más información, ver el archivo "package.json" 