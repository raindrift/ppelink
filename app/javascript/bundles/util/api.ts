import create, { AxiosPromise } from 'axios';

const getCsrfToken = () => {
  const csrfToken: any = document.getElementsByName('csrf-token')[0];
  return csrfToken ? csrfToken.content : '';
};

class API {
  client: AxiosPromise;

  constructor() {
    this.client = create({
      baseURL: ('/'),
      // withCredentials: true,
      headers: {
        'X-CSRF-Token': getCsrfToken()
      }
    });
  }

  get(...args) {
    // @ts-ignore
    return this.client.get(...args);
  }

  post(...args) {
    // @ts-ignore
    return this.client.post(...args);
  }

  put(...args) {
    // @ts-ignore
    return this.client.put(...args);
  }

  delete(...args) {
    // @ts-ignore
    return this.client.delete(...args);
  }
}

export default new API();
