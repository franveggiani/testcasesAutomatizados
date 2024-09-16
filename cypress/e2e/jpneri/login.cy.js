describe('Login test', () => {

  it('Debe dar error al intenta loguearse sin contraseña', () => {   
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

    cy.get('input[id="email"]').type('danielrabinovich@gmail.com');
    /* No coloca contraseña */
    cy.get('button[id="submit"]').click();

    cy.get('#error').should('contain', 'Incorrect username or password');

  })
})