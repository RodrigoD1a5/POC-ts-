import { Router } from "express";
import { createMovie } from "../controllers/movieController.ts";
import { validateSchema } from "../middlewares/validateSchema.ts";
import { movieSchema } from "../schemas/movieSchema.ts";

const moviesRouter = Router()

moviesRouter.post("/movie", validateSchema(movieSchema), createMovie)

export default moviesRouter