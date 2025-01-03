import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

// Connexion à MongoDB et démarrage du serveur
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");

    // Démarrer le serveur après une connexion réussie à la base de données
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Erreur de connexion à MongoDB :", error.message);
  });
