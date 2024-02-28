import express from "express";
import db from "./config/Database.js";
import cors from "cors";

// ROUTES
import Business from "./routes/BusinessRoute.js"
import Categories from "./routes/CategoriesRoute.js"

// import PembuatanTabel from "./models/CategoriesModel.js"


try {
    await db.authenticate();
    console.log('Database connected...');
    // await PembuatanTabel.sync();
} catch (error) {
    console.error('Connection error:', error);
}

const app = express();
app.use(cors());
app.use(express.json());

// URL API
app.use('/business', Business)
app.use('/categories', Categories)

app.listen(5001, () => console.log('Server running at port 5001'));