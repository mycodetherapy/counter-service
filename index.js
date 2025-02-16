const express = require("express");
const counterRoutes = require("./routes/counter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(counterRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Counter service running on port ${PORT}`));
