describe('Blog app', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3003/api/testing/reset')
      cy.visit('http://localhost:3000')
    })
  
    it('Login form is shown', function() {
        cy.contains('login' && 'password')

    })
    beforeEach(function() {
        
        // create here a user to backend
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
          name: 'testi',
          username: 'testaaja',
          password: 'salasana'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', user) 
        cy.visit('http://localhost:3000')
      })
    
      it('Login form is shown', function() {
        cy.contains('login' && 'password')

      })
    
      describe('Login',function() {
        it('succeeds with correct credentials', function() {
            cy.get('#username').type('testaaja')
            cy.get('#password').type('salasana')
            cy.get('#loginbutton').click()
            cy.contains('blogs')
            cy.contains('logged in')


        })
    
        it('fails with wrong credentials', function() {
            cy.get('#username').type('testaaja')
            cy.get('#password').type('hups')
            cy.get('#loginbutton').click()
            cy.contains('wrong username or password')
        })
      })
  })