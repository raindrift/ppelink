import React, { Component } from 'react';
import _ from 'lodash';

declare global {
  interface Window {
    getState: any;
    initialReactState: any;
  }
}

async function apiRequest(method, path, body = null) {
  // comment this out to reduce console spam
  console.log('apiRequest', { method, path, body });
  const response = await fetch(`/api${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  console.log('apiRequest', { method, path, body, response });
  return response.json();
}

async function loadResource(options: any = {}) {
  const { id, name } = options;
  let endpoint = `/${_.snakeCase(name)}`;

  if (id) {
    endpoint = `${endpoint}/${id}`;
  }
  const capitalizedName = `${name[0].toUpperCase()}${name.slice(1)}`;
  this.setState({
    [`loading${capitalizedName}`]: true,
    loading: true,
    error: undefined
  });
  const response = await apiRequest('get', endpoint);
  this.setState({
    [`loading${capitalizedName}`]: false,
    loading: false,
    error: response.error,
    [name]: response[name]
  });
}

const actions = {
  async loadCurrentContact() {
    await loadResource.call(this, { name: 'currentContact' });
  },

  async rememberNewOrg(newOrganization) {
    this.setState({ newOrganization });
  },

  // this is an example of a put. it doesn't work yet.
  async confirmContact(newOrganization, newContact) {
    this.setState({
      loading: true
    });
    const { error } = await apiRequest('post', '/confirm', {
      contact: newContact,
      organization: newOrganization
    });
    this.setState({
      loading: false
    });
  },

  // lots of other frontend business logic goes here
  async resetError() {
    this.setState({ error: false });
  }
};

export default class AppState extends Component<{ children?: any }, any> {
  constructor(props) {
    super(props);
    // for sending state from rails on initial app load
    this.state = {
      ...window.initialReactState
    };

    window.getState = () => this.state;
  }

  // This is for a websocket, if we want it later
  // componentDidMount() {
  //   App.cable.subscriptions.create(
  //     { channel: "ContactChannel" },
  //     {
  //       received: message => {
  //         console.log('received from socket', message)
  //         this.setState(message);
  //       },
  //     }
  //   );
  // }

  updateAppState = (newState) => {
    this.setState(newState);
  };

  takeAction = (action, ...args) => {
    // console.log('[action]', action, args)
    if (!(action in actions)) throw new Error(`unkown action ${action}`);
    actions[action].apply(this, args).catch((error) => {
      console.error('[action]', action, error);
      this.setState({
        [`action:${action}:error`]: error
      });
    });
  };

  render() {
    console.dir(this.state);
    return this.props.children({
      ...this.state,
      takeAction: this.takeAction
    });
  }
}
