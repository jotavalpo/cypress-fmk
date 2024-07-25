describe("Nueva mascota", () => {

    it ("Crear mascota", () => {
        cy.api(
            {
                method: 'POST',
                url: "https://petstore.swagger.io/v2/pet",
                body:   {
                    id: 9999,
                    category: {
                        id:0,
                        name: "string"
                    },
                    name: "doggie",
                    photoUrls: [
                        "string"
                    ],
                    tags: [
                        {
                            id:0,
                            name: "string"
                        }
                    ],
                    status: "available"

                    
                }
            })

        .then((response) =>{
            expect(response.status).to.eq(200)
        })

    })

})