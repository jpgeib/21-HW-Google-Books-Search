const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.join());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/googleBookSearch", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => console.log("Server started on PORT " + PORT));