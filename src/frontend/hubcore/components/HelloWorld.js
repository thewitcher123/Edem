import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  loadHelloWorld(params) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:9000');

    fetch(`http://localhost/server/api/v0/${params}`, {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ message: data });
        console.log(data);
      });
  }

  componentDidMount() {
    this.loadHelloWorld('hello_world');
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default HelloWorld;
