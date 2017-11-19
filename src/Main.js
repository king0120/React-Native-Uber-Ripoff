
import { View, Text } from "react-native"

import React, { Component } from 'react';

export default class Root extends Component{
  renderApp(){
    const initialState = window.__INITIAL_STATE__;
    const store = createStore(initialState);

    return (
      
    );
  }

  render(){
    return this.renderApp()
  }
}
class Main extends Component {
  render() {
    return (
      <View>
        <Text>Hello Taxi App</Text>
      </View>
    );
  }
}

export default Main;