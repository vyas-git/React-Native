import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {Icon} from 'native-base';

import Home from './Home';
import ImageView from './components/ImageView';
import GridView from './components/Grid';
import FlatListDemo from './FlatList';

import {TouchableHighlight} from 'react-native';
const stackNavigatorConfig = {
  initialRouteName: 'Home',
  headerStyle:{backgroundColor:'#AA00FF',color:'#fff'},

};

export default StackNavigator({
  Home: {
    screen: FlatListDemo,
  },
  ImageView:{
    screen:ImageView
  },
  GridView:{
    screen:GridView
  }
},{
navigationOptions:{
  headerStyle:{backgroundColor:'#263238',color:'#fff'},
  headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},
headerTintColor:'#fff',


}});
