/**
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "mobx-react";
import Home from "./Home";
import stores from "./stores";
import { StackNavigator } from 'react-navigation';
import FlatListDemo from './FlatList';
import ImageView from './components/ImageView';

import Stack from './router';

export default class MainApp extends Component {

  constructor(props: Object) {
    super(props);
  }



  render() {

    return (
      <Provider {...stores}>
      <Stack />
      </Provider>
    );
  }
}
export  const App = StackNavigator({

  Home: { screen: MainApp },
  ImageView:{screen:ImageView}
});
