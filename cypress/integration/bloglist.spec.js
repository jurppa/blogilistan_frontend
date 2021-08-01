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
      describe('When logged in', function() {
        beforeEach(function() {
            cy.get('#username').type('testaaja')
            cy.get('#password').type('salasana')
            cy.get('#loginbutton').click()
       
        })
    
        it('A blog can be created', function() {
           
            cy.get('#show').click()
            cy.get('#title').type('cypress testi')
            cy.get('#author').type('testihenkilö')

            cy.get('#url').type('www.google.fi')
            cy.get('#createpost').click()
            cy.contains('cypress testi')
        })
        it('A blog can be liked', function() {
           
          cy.get('#show').click()
          cy.get('#title').type('cypress testi')
          cy.get('#author').type('testihenkilö')

          cy.get('#url').type('www.google.fi')
          cy.get('#createpost').click()
          cy.contains('cypress testi')
          cy.reload()
          cy.get('#view').click()
          cy.get('#like').click()
          
      })
      it('A blog can be liked', function() {
           
        cy.get('#show').click()
        cy.get('#title').type('cypress testi')
        cy.get('#author').type('testihenkilö')

        cy.get('#url').type('www.google.fi')
        cy.get('#createpost').click()
        cy.contains('cypress testi')
        cy.reload()
        cy.get('#view').click()
        cy.get('#like').click()
        
    })
      })
  })