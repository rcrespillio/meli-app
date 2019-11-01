import * as express from 'express';
import axios from 'axios';
import { appAuthor } from '../resources/author';

const itemEndpoint = express.Router({ mergeParams: true });

itemEndpoint.route('/').get((req, res) => {
  const { params = {} } = req;
  console.log(params)
  Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${params.id}`),
    axios.get(`https://api.mercadolibre.com/items/${params.id}/description`),
  ]).then( ([dataResponse, descriptionResponse]) => {
    console.log(dataResponse, descriptionResponse)
    const data = dataResponse.data;
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
        picture: data.pictures[0],
        condition: data.attributes.find( attr => attr.id === "ITEM_CONDITION").value_name,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: String
      }
    }
    res.json(descriptionResponse);
  }).catch( ({error, statusCode }) => {
    res.status(statusCode).json(error);
  })
});

export default itemEndpoint;
