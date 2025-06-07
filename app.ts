import express from "express"
import cors from "cors"
import Routes from "./routes";

const app = express ()

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send('Bem-vindo à Rota principal');
  });

  app.use(Routes)



export default app