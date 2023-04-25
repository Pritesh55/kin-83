
import { config } from '../constants';

export const getAllProductsData = async () => {

  const URL = config.url;
  
  console.log(`url is ${URL}`);

  const res = await fetch(`${URL}/api/product/read`);

  console.log(`${URL}/api/product/read`);

  if (!res.ok) {
   
    throw new Error('getAllProductsData :: Failed to fetch data from HERE');
  }

  return res.json();
}