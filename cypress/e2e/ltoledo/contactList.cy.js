describe('Contact List Tests', () => {
    // Visita la página al iniciar el test
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    // Test 1: Verificar que el título de la página se muestra correctamente
    it('Should display the correct page title', () => {
      cy.title().should('include', 'Contact List');
    });
  
    // Test 2: Agregar un contacto y verificar si aparece en la lista
    it('Should add a new contact to the list', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('button[type="submit"]').click();
  
      // Verificar que el nuevo contacto está en la lista
      cy.contains('John Doe').should('exist');
      cy.contains('johndoe@example.com').should('exist');
      cy.contains('1234567890').should('exist');
    });
  
    // Test 3: Borrar un contacto
    it('Should delete a contact from the list', () => {
      cy.contains('John Doe')
        .parent()  // Selecciona el contenedor del contacto
        .find('button.delete')  // Encuentra el botón de eliminar
        .click();
      
      // Verificar que el contacto fue eliminado
      cy.contains('John Doe').should('not.exist');
    });
  });
  