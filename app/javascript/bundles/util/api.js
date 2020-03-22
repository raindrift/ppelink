import { create } from 'axios';

class API {
  constructor() {
    this.client = create({
      baseURL: ('/')
      // withCredentials: true,
    });
  }

  get(...args) {
    return this.client.get(...args);
  }

  post(...args) {
    return this.client.post(...args);
  }

  put(...args) {
    return this.client.put(...args);
  }

  delete(...args) {
    return this.client.delete(...args);
  }
}

export default new API();
