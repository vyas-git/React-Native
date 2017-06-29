import React, {Component} from 'react';
import {Text, AppRegistry,View,TouchableHighlight,Navigator,NetInfo} from 'react-native';
import {Container,Icon} from 'native-base';
import IAppHeaderTabs from './iAppHeaderTabs';

import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
import {DrawerNavigator,StackNavigator} from 'react-navigation';

export default class TopRecruitments extends Component {

render() {
  const { navigate } = this.props.navigator;
  return (<IAppHeaderTabs navigator={navigate} jobKey={this.props.jobKey}/>);

}




}
module.export=TopRecruitments;
