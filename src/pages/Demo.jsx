import React, { Component } from 'react';

import Timer from '../components/demo/Timer';

export default class Demo extends Component {

  render () {
    return (
      <div>
        <Timer second={3} />
      </div>
    );
  }
}