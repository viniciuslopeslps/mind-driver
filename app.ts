const app = require("./config/express").app;
const contentRouter = require("./controllers/routes/content-router");

app.use("/content", contentRouter);

app.listen(3000);