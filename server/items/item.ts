import * as express from 'express';
import axios from 'axios';
import { appAuthor } from '../resources/author';
import { recursiveCategoriesExtraction } from './helpers';

const itemEndpoint = express.Router({ mergeParams: true });

itemEndpoint.route('/').get((req, res) => {
  const { params = {} } = req;
  Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${params.id}`),
    axios.get(`https://api.mercadolibre.com/items/${params.id}/description`),
  ]).then(([dataResponse, descriptionResponse])=> {
    return axios.get(`https://api.mercadolibre.com/categories/${dataResponse.data.category_id}`).then( categoriesResponse => ([dataResponse, descriptionResponse, categoriesResponse]) )
  })
  .then( ([dataResponse, descriptionResponse, categoriesResponse]) => {
    const data = dataResponse.data;
    const categories = recursiveCategoriesExtraction(categoriesResponse.data);
    const response = {
      author: appAuthor,
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2,
        },
        categories,
        picture: data.pictures[0].url,
        condition: data.attributes.find( attr => attr.id === "ITEM_CONDITION").value_name,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: descriptionResponse.data.plain_text
      }
    }
    res.json(response);
  }).catch( ({error, statusCode }) => {
    res.status(statusCode).json(error);
  })
});

export default itemEndpoint;
