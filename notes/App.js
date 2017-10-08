/**
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { Provider } from "mobx-react";
import Drawer from './src/router';
import stores from './src/stores';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor,top:0,left:0 }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default class App extends Component {

  constructor(props: Object) {
    super(props);
  }



  render() {

    return (
      <Provider {...stores}>

      <View style={styles.container}>
      <MyStatusBar  backgroundColor="#26A69A" barStyle="light-content" />

      <Drawer style={{backgroundColor: '#2B2B2B'}} />



    </View>
      </Provider>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
