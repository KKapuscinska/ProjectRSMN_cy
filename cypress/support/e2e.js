// Import commands.js using ES2015 syntax:
import './commands';
require('cypress-failed-log');
import './commands/files/readFile.js';



Cypress.on('uncaught:exception', (err, runnable) => {
	console.log('err :' + err);
	console.log('runnable :' + runnable);
	return false;
});
//Przydatne podczas wymyślnych czcionek na stronie. W konsoli pokazuje błąd ponieważ nie czyta czcionki
