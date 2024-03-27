# cypress-fmk

1 Instalación y configuración de Cypress
1.1 Pendiente ...

2 Algunas consideraciones al usar Cypress

2.1 La versión 13 (actual) falla allure (no genera evidencias para reporte), además no reconoce comandos cypress (run)
Solucion:
- eliminar caché de carpeta \AppData\
- borrar carpeta node_modules del proyecto
- instalar cypress 12 con npm install cypress@12.13.0

2.3 Commandos no encontrados, por ejemplo, cypress -v o allure-report
Ocurre cuando estos paquetes no están instalados de manera global. Para solucionarlo ejecutar en la consola:
npm install cypress@12.13.0 -g (instala una versión específica globalmente)
npm install --location=global
npm install allure-command-line -g (instala la consola de allure para ejecutar comandos de manera global)
npm install --location=global

3 Tips git
3.1 para no agregar otro commit nuevo con cambio sin editar texto (en caso de ajustar algo que le falto a commit anterior)
git commit --amend --no-edit

3.2 Modificar comentario de commit anterior
git commit --amend -m "an updated commit message"

4 ¿Cómo hacer y para que sirve?
4.1 simbolo ``. Para algunas expresiones que no permite comillas simples o dobles
"ALT GR" + "]}"

4.2 Poner letra x
si se antepone al nombre de la test suite y el caso de prueba (describe, it) se puede omitir la ejecución de dicho grupo de casos de prueba y escenario

4.3 Opción only en testcase
Se antepone a la palabra reservada it que es donde se especifica el nombre del escenario de prueba
Si se pone esa palabra se ejecutara solo ese escenario del caso o conjunto de casos total

4.4 Parametro --spec
Dentro del archivo package.json se puede poner el parametro --spec para indicar ejecutar solo un archivo especifico, el que se llama desde su ruta, ejemplo:
--spec \"cypress/e2e/tests/autenticacion.cy.js (solo ejecutara ese test js)

4.5 Hooks
permiten ordenar la secuencia se ejecución de uno o varios casos de prueba (solo como buena práctica)
para usarlos se puede introducir dentro del archivo /support/e2e.js, ejemplo:

beforeEach(() =>{
	CommandPageMethods.navigateToDemoBlaze();
})

esto permite que cada caso de prueba ejecute este caso antes de comenzar