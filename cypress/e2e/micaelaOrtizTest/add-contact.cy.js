describe("Add contact tests", () => {
	it("Agregar contacto con birthdate y email inválido", () => {
		cy.visit("https://thinking-tester-contact-list.herokuapp.com");

		cy.get('input[id="email"]').type("jmartines@gmail.com");
		cy.get('input[id="password"]').type("123456789");
		cy.get('button[id="submit"]').click();

		cy.url().should("include", "/contactList");

		cy.get('button[id="add-contact"]').click();
		cy.get('input[id="firstName"]').type("Evangelina");
		cy.get('input[id="lastName"]').type("Perez");
		cy.get('input[id="birthdate"]').type("0000-00-00");
		cy.get('input[id="email"]').type("evangelina.perez");

		cy.get('button[id="submit"]').click();

		cy.get('span[id="error"]').should("be.visible").and("not.be.empty");
		cy.url().should("not.include", "/contactList");
	});
});
