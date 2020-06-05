const app = require('./config/express').app;
const userRouter = require('./controllers/routes/user-router');
const contentRouter = require('./controllers/routes/content-router');
const authenticationRouter = require('./controllers/routes/authentication-router');

app.use('/users', userRouter);
app.use('/contents', contentRouter);
app.use('/auth', authenticationRouter);

app.listen(3000);