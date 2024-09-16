export function createContact(contactData) {
    cy.get('button#add-contact').click();

    cy.get('input#firstName').type(contactData.firstName);
    cy.get('input#lastName').type(contactData.lastName);
    cy.get('input#birthdate').type(contactData.birthdate);
    cy.get('input#email').type(contactData.email);
    cy.get('input#phone').type(contactData.phone);
    cy.get('input#street1').type(contactData.street1);
    cy.get('input#street2').type(contactData.street2);
    cy.get('input#city').type(contactData.city);
    cy.get('input#stateProvince').type(contactData.stateProvince);
    cy.get('input#postalCode').type(contactData.postalCode);
    cy.get('input#country').type(contactData.country);

    cy.get('button#submit').click();
}