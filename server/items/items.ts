import * as express from 'express';
import axios from 'axios';
import { appAuthor } from '../resources/author';
import { recursiveCategoriesExtraction } from './helpers';

const itemsEndpoint = express();

itemsEndpoint.get('/', (req, res) => {
  const { query = {} } = req;
  if(!query.q){
    res.json({
      author: appAuthor,
      categories: [],
      items: []
    })
    return;
  }
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query.q}`).then( ({ data }) => {
    const categoryFilter = data.filters.find( ({id}) => id === 'category') || { values: [] };
    const categories = recursiveCategoriesExtraction(categoryFilter.values[0]);
    const response = {
      author: appAuthor,
      categories,
      items: data.results.slice(0,4).map( item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2
        },
        picture: item.thumbnail,
        condition: item.attributes.find( attr => attr.id === "ITEM_CONDITION").value_name,
        free_shipping: item.shipping.free_shipping
      }))
    }

    res.json(response);
  }).catch( ({error, statusCode }) => {
    res.status(statusCode).json(error);
  })
});




export default itemsEndpoint;
