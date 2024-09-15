describe("template spec", () => {
	it("Prueba de acceso al sign up", () => {
		/* Le damos el nombre a la prueba */
		cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");

		cy.get('input[id="firstName"]').type("Jorge");
		cy.get('input[id="lastName"]').type("Harrison");
		cy.get('input[id="email"]').type("jorgeharrison111@apple.com");
		cy
			.get('input[id="password"]')
			.type("123456789"); /* Acá podríamos hacer un test que compruebe que
	                                                    no te deja poner una contraseña < 7 dígitos */

		cy.get('button[type="submit"]').click();

		cy.url().should("include", "/contactList");

		/* https://thinking-tester-contact-list.herokuapp.com/contactList */
	});
});
