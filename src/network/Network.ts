import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';

export async function getRequest(endPoint: string): Promise<any> {
  return await axios.get(`${BASE_URL}${endPoint}`);
}
