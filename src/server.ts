import express from "express";
import swaggerUi from "swagger-ui-express";

import { connectDb } from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

connectDb();
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => console.log("Server is runnigs!"));
