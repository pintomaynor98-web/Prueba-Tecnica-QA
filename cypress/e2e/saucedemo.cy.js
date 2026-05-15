describe('Prueba Técnica - Compra en Saucedemo', () => {
    
    it('Debe completar el flujo de compra exitosamente', () => {
        // 1. Visitar la página oficial del ejercicio
        cy.visit('https://www.saucedemo.com/')

        // 2. Login con las credenciales estándar
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        // 3. Agregar exactamente dos productos al carrito
        // Agregamos la mochila y la camiseta
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        // 4. Ir al carrito para verificar
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_list').should('contain', 'Sauce Labs Backpack')
        cy.get('.cart_list').should('contain', 'Sauce Labs Bolt T-Shirt')

        // 5. Iniciar el Checkout (Proceso de pago)
        cy.get('[data-test="checkout"]').click()

        // 6. Llenar información de envío
        cy.get('[data-test="firstName"]').type('Maynor')
        cy.get('[data-test="lastName"]').type('Pinto')
        cy.get('[data-test="postalCode"]').type('11101')
        cy.get('[data-test="continue"]').click()

        // 7. Finalizar la orden
        cy.get('[data-test="finish"]').click()

        // 8. Validación final: Mensaje de éxito solicitado
        cy.get('.complete-header').should('contain', 'Thank you for your order!')
    })
})