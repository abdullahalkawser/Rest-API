import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './router/user.js'; // Adjust path if necessary

const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use userRouter
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
