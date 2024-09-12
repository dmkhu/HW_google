describe('Тест калькулятор google', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com'); //Переходим на страницу Google
    })

    it('Тест калькулятора', () => {
      
        cy.get('textarea').eq(0)
        .type('Калькулятор{enter}', { delay: 0 });
        cy.get('#cwos').click()
        .type('1*2-3+1{enter}', { delay: 0 })
        .should('have.text', '0');
      })
});  