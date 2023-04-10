import express, { json } from "express";
import moviesRouter from "./routes/moviesRouter.ts";

const app = express()
app.use(json())

app.use(moviesRouter)

app.listen(5000, () => {
    console.log("Servidor conectado na porta 5000")
})