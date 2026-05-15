TECHNICAL EXECUTION PROTOCOL - Prueba-Tecnica-QA

1. PROJECT ACCESS
The code can be audited via either of the following two ways:
* Via Repository: Cloning the project from GitHub.
* Via Local: Extracting the content of the compressed file (.zip) named 'Prueba-Tecnica-QA'.

2. ENVIRONMENT SETUP
Regardless of the access method, it is mandatory to rebuild the project dependencies before execution. Open a terminal in the 'Prueba-Tecnica-QA' root directory and run:

npm install

3. EXECUTION MODES

A. Graphical Interface (Interactive Mode)
For a visual audit of the flow and selectors in real-time:

npx cypress open

* Steps: Select E2E Testing > Browser (Chrome/Edge) > saucedemo.cy.js.

B. Command Line (Headless Mode)
For a quick automated validation with results reported in the console:

npx cypress run

4. TEST COVERAGE (E2E)
* File: cypress/e2e/saucedemo.cy.js
* Flow: User authentication -> Adding 2 items to inventory -> Checkout (shipping/billing) -> Final purchase confirmation.

================================================================================

PROTOCOLO DE EJECUCIÓN TÉCNICA - Prueba-Tecnica-QA

1. ACCESO AL PROYECTO
El código puede ser auditado mediante cualquiera de las siguientes dos vías:
* Vía Repositorio: Clonando el proyecto desde GitHub.
* Vía Local: Extrayendo el contenido del archivo comprimido (.zip) llamado 'Prueba-Tecnica-QA'.

2. PREPARACIÓN DEL ENTORNO
Independientemente del método de acceso, es imperativo reconstruir las dependencias del proyecto antes de la ejecución. Abra una terminal en la raíz del directorio 'Prueba-Tecnica-QA' y ejecute:

npm install

3. MODALIDADES DE EJECUCIÓN

A. Interfaz Gráfica (Modo Interactivo)
Para una auditoría visual del flujo y los selectores en tiempo real:

npx cypress open

* Pasos: Seleccione E2E Testing > Navegador (Chrome/Edge) > saucedemo.cy.js.

B. Línea de Comandos (Modo Headless)
Para una validación automatizada rápida con reporte de resultados en consola:

npx cypress run

4. COBERTURA DEL TEST (E2E)
* Archivo: cypress/e2e/saucedemo.cy.js
* Flujo: Autenticación de usuario -> Adición de 2 ítems al inventario -> Checkout (envío/facturación) -> Confirmación final de compra.

GUÍA DE CONFIGURACIÓN Y EJECUCIÓN / SETUP AND EXECUTION GUIDE
=========================================================
PROYECTO: Automatización de API Demoblaze / Demoblaze API Automation
TECNOLOGÍA: Cypress.io
ESTRUCTURA: Carpeta cypress/API / cypress/API Folder

REQUISITOS / PREREQUISITES:
--------------------------
- Node.js (Versión 14 o superior) / Node.js (Version 14 or higher)
- Navegador Google Chrome / Google Chrome Browser

INSTRUCCIONES (ESPAÑOL):
-----------------------
1. Instalación: Ejecute 'npm install' en la raíz del proyecto.
2. Ejecución Visual: Use el comando 'npx cypress open'. Una vez abierto, seleccione el archivo dentro de "cypress/API".
3. Ejecución por Consola: Ejecute el siguiente comando para correr el script directamente:
   npx cypress run --spec "cypress/API/demoblaze_api.cy.js"

INSTRUCTIONS (ENGLISH):
----------------------
1. Installation: Run 'npm install' in the project root.
2. Visual Execution: Use 'npx cypress open'. Once open, select the file inside "cypress/API".
3. Headless Execution: Run the following command to execute the script directly:
   npx cypress run --spec "cypress/API/demoblaze_api.cy.js"