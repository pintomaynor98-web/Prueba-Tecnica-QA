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

REQUISITOS / PREREQUISITES:
--------------------------
- Node.js (Versión 14 o superior) / Node.js (Version 14 or higher)
- Navegador Google Chrome / Google Chrome Browser

INSTRUCCIONES (ESPAÑOL):
-----------------------
1. Instalación: Abra una terminal en la raíz del proyecto y ejecute 'npm install'.
2. Ejecución Visual: Use el comando 'npx cypress open' y seleccione el archivo 'demoblaze_api.cy.js'.
3. Ejecución por Consola: Use 'npx cypress run' para generar resultados y evidencias automáticas.

INSTRUCTIONS (ENGLISH):
----------------------
1. Installation: Open a terminal in the project root and run 'npm install'.
2. Visual Execution: Use the command 'npx cypress open' and select 'demoblaze_api.cy.js'.
3. Headless Execution: Use 'npx cypress run' to trigger automated results and evidence.