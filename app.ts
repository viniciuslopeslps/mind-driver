const app = require("./config/express").app;
const contentRouter = require("./controllers/routes/content-router");
const authenticationRouter = require("./controllers/routes/authentication-router");

app.use("/content", contentRouter);
app.use("/auth", authenticationRouter);


app.listen(3000);