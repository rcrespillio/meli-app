import * as express from 'express';
import itemsEndpoint from './items';
import itemEndpoint from './item';


const itemsApi = express();

itemsApi.use('/:id', itemEndpoint);
itemsApi.use('/', itemsEndpoint);

export default itemsApi;
