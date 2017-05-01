import React, {Component} from 'react';
import {Text, AppRegistry,View,TouchableHighlight,Navigator,NetInfo} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from './src/themes/components';
import material from './src/themes/variables/material';

import AppDrawer from './src/components/appDrawer';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
import ViewJob from './src/components/jobView';
import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
export default class MyProject extends Component {

  state = {
    isConnected: null,
  };
  componentDidMount() {
    StatusBarManager.setColor(processColor('#D500F9'), false);

    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  }


  componentWillUnmount() {

    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

render() {
  return (
     <Navigator initialRoute={{id:1}} renderScene={this.navigatirRenderScene}/>

    );


}
navigatirRenderScene(route,navigator){

  _navigator=navigator;
  switch (route.id) {
    case 1:
    return(

             <AppDrawer navigator={navigator}/>

    );

      case 2:
      return(<ViewJob navigator={navigator} url={route.url}/>);


      break;
    default:

  }
}

}

AppRegistry.registerComponent('indianjobs', () => MyProject);
