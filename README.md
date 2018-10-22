# MoneyXchange: Prueba Técnica Belatrix

Este proyecto ha sido creado con Angular CLI y Angular 4. Se utilizó Yarn para congelar la versión de las librerías necesarias.
Se debe instalar el Node JS y NPM de la siguiente Url:
https://www.npmjs.com/get-npm/

Luego, utilizar un terminal de Wndows para ejecutar los comandos requeridos. Por ejemplo:
https://conemu.github.io/

Ubicarse en el proyecto descargado. Por ejemplo:
>cd D:\money-xchange

Intalar las librerías con Yarn (recomendado) o NPM:
> yarn install / npm install

Compilar el TypeScript e iniciar la web SPA:
> ng serve

Ingresar a la siguiente URL para probar la web: 
http://localhost:4200/landingpage

Se crearon 3 componentes para el desarrollo de la prueba:
- WireframeComponent: contiene el diseño de la página el cual puede ser utilizado como plantilla.
- MoneyXchangeComponent: contiene la sección de la página que se encargará de realizar el tipo de cambio. Recibe como input las monedas base y de conversión.
- LandingPageComponent: componente principal. Contiene los componentes antes mencionados y desde aqui se realiza la invocación a la API de conversión.
	
API utilizada para el tipo de cambio:
http://data.fixer.io/api/

También se utiliza un servicio de caché de la comunidad para almacenar el resultado de la API por 10 minutos (parámetro configurable).

Además, se desarrollaron unas pruebas básicas las cuáles se pueden correr con el siguiente comando:
> ng test

La web es responsive y puede visualizarse desde dispositivos móviles.