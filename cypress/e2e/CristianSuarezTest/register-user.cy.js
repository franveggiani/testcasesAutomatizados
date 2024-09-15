describe("When create user user case is called", () => {
	it("Should not create a user with an existing email", () => {
		cy.intercept("POST", "/users", {
			statusCode: 400,
			body: {
			  message: "Email address is already in use",
			},
		  }).as("createUser");
	  
		  cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser");
	  
		  cy.get('input[id="firstName"]').type("Cristian");
		  cy.get('input[id="lastName"]').type("Suarez");
		  cy.get('input[id="email"]').type("existingemail@example.com");
		  cy.get('input[id="password"]').type("test1234");
		  cy.get('button[type="submit"]').click();
	  
		  cy.wait("@createUser");
		  cy.contains("Email address is already in use").should("be.visible");
	});
});
