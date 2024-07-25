describe("Buscar mascotas por estado", () => {

    it ("Buscar mascota por status", () => {
        cy.api(
            {
                method: 'GET',
                url: "https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
            })

        .then((response) =>{
            expect(response.status).to.eq(200)
        })
           
    })

}) 