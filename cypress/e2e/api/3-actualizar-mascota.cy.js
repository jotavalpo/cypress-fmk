describe("Actualización", () => {

    it ("Actualizar mascota", () => {
        cy.api(
            {
                method: 'PUT',
                url: "https://petstore.swagger.io/v2/pet",
                body:   {
                    id: 9999,
                    category: {
                        id:0,
                        name: "string"
                    },
                    name: "lassie",
                    photoUrls: [
                        "string"
                    ],
                    tags: [
                        {
                            id:0,
                            name: "string"
                        }
                    ],
                    status: "sold"

                    
                }
            })

        .then((response) =>{
            expect(response.body.name).to.eq("lassie")
        })

    })
}) 
