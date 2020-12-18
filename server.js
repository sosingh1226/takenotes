const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8000;

const apiRoutes = require("./Develop/routes/apiRoutes")
const clientRoutes = require("./Develop/routes/clientRoutes");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./Develop/public"))

app.use("/api", apiRoutes);
app.use("/", clientRoutes);


app.listen(PORT, () => console.log (`listening at http://localhost:${PORT}`));
