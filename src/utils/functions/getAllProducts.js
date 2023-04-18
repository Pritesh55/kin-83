
import { config } from '../constants';

export const getAllProductsData = async () => {


  const URL = config.url;


  const res = await fetch(URL);
  // -------------------------------------------------------------------
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}