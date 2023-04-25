
import { config } from '../constants';

export const getAllProductsData = async () => {

  const URL = config.url;
  
  console.log(`url is ${URL}`);

  const res = await fetch(`${URL}/api/product/read`);

  console.log(`${URL}/api/product/read`);
  // -------------------------------------------------------------------
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('getAllProductsData :: Failed to fetch data from HERE');
  }

  return res.json();
}