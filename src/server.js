const app = require("./index")



const PORT = process.env.PORT || 3001


const server = app.listen(PORT , () => {
    console.log(`App rodando na porta ${PORT}`)
})