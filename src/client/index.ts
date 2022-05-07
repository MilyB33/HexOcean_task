import { IReturn, IDish } from '../types';

const URI = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

class Client {
  async addDish(dish: Record<string, any>): Promise<IReturn> {
    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dish),
      });

      const data = (await response.json()) as IDish;

      if (response.status !== 200) {
        return {
          failed: true,
          message: Object.values(data)[0], // Api returns only one error message even if multiple errors
        };
      }

      return {
        data,
        failed: false,
        message: 'Dish added successfully',
      };
    } catch ({ message }) {
      console.log({ message });

      return {
        failed: true,
        message: 'Something went wrong',
      };
    }
  }
}

export default new Client();
