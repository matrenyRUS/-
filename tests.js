
describe('Log in', ()=> {
  it('Sing in', ()=> {
   cy.visit('https://searchengines.guru/ru/login')
   cy.viewport(1920,1080)
   cy.get('#login').type("twinkleshop@mail.ru")
   cy.get('#password').type("gh7TUndrG9")
   cy.get('.button').click()
 })
})