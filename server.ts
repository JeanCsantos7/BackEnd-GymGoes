import app from "./app"
import dotenv from "dotenv";

dotenv.config()

const PORT = 5000
const URL = `http://localhost:${PORT}`

app.listen(PORT, () => {

    console.log(`Servidor Rodando na porta ${PORT}`)
    console.log(`Endereço: ${URL} `)
})