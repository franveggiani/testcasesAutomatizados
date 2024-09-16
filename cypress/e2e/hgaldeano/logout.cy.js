describe("Logout test", () => {
	it("Debe cerrar la sesion y luego redireccionar a la pagina de inicio", () => {

    //Iniciar sesion
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('input[id="email"]').type('juancitoperez@gmail.com');
    cy.get('input[id="password"]').type('12345678');
    cy.get('button[id="submit"]').click();

    //Cerrar sesion
    cy.get('button[id="logout"]').click();

    //Verificar que se cerro la sesion y que redirecciona al inicio
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/logout');

    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/');
	});
});