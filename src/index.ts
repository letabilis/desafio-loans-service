import express from 'express';
import { router } from './routers/router.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(express.json());
app.use(morgan('combined'));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
