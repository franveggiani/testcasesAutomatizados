import { repeatedContactsTestData } from '../../fixtures/ltoledo/repeatedContactsTestData';
import { createContact } from '../../support/ltoledo/contactUtils'; // Asegúrate de que la ruta sea correcta

describe('Contact List Tests', () => {
    // Visita la página al iniciar el test
    beforeEach(() => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });

    /**
     * Caso de Prueba: Verificar contactos duplicados
     * 
     * Este caso de prueba realiza los siguientes pasos:
     * 1. Inicia sesión usando las credenciales proporcionadas.
     * 2. Agrega un nuevo contacto usando los datos del contacto del archivo de prueba.
     * 3. Verifica que el nuevo contacto esté presente en la lista de contactos.
     * 4. Intenta agregar el mismo contacto nuevamente para probar el manejo de duplicados.
     * 5. Verifica que se muestre un mensaje de error al intentar agregar un contacto duplicado.
     */
    it('Should not add a repeated contact to the list', () => {
        // Datos para el inicio de sesión
        const loginData = repeatedContactsTestData.loginData;

        // Iniciar sesión en la aplicación
        cy.get('input#email').type(loginData.username);
        cy.get('input#password').type(loginData.password);
        cy.get('button#submit').click();

        // Datos para el contacto que se va a agregar
        const contactData = repeatedContactsTestData.contactData;

        // Verificar que el nuevo contacto esté presente en la lista de contactos
        createContact(contactData);

        // Verificar que el nuevo contacto está en la lista
        cy.contains(contactData.firstName).should('exist');
        cy.contains(contactData.lastName).should('exist');
        cy.contains(contactData.birthdate).should('exist');
        cy.contains(contactData.email).should('exist');
        cy.contains(contactData.phone).should('exist');
        cy.contains(contactData.street1).should('exist');
        cy.contains(contactData.street2).should('exist');
        cy.contains(contactData.city).should('exist');
        cy.contains(contactData.stateProvince).should('exist');
        cy.contains(contactData.postalCode).should('exist');
        cy.contains(contactData.country).should('exist');

        // Intentar agregar el mismo contacto nuevamente
        createContact(contactData);

        // Verificar que se muestra un mensaje de error por contacto duplicado
        cy.contains('Error: Contact already exists').should('exist');
    });
});
