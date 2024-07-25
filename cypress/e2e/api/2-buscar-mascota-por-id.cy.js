describe("Buscar mascotas por id", () => {

    it ("Buscar una mascota por su id", () => {
        cy.api(
            {
                method: 'GET',
                url: "https://petstore.swagger.io/v2/pet/9999"
            })

        .then((response) =>{
            expect(response.body.name).to.eq("doggie")
        })
           
    })

}) 