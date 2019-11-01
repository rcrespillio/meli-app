import * as express from 'express';
import itemsApi from './items/itemsApi';

const app = express();

app.use('/items', itemsApi);

export default app;
