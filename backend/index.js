import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoute.js";

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

//Routing
app.get("/", (req, res) => {
  res.send("<a href='/api/usuarios'>Usuarios</a>");
});
app.use("/api/usuarios", usuarioRoutes);

//Servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
