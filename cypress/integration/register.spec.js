const faker = require('faker');

context('Cadastro', () => {
    it('Cadastro de usuário válido', () => {
        cy.visit('index.php?controller=authentication&back=my-account');

        cy.get('input#email_create').type(faker.internet.email());
        cy.get('#SubmitCreate').click()
    });
});