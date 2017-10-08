import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import Home from './Home';
import NotesList from './NotesList';
import AddCategories from './AddCategories';
const Stack = StackNavigator({
  Home: { screen: Home },
  NotesList:{screen : NotesList},
  AddCategories:{screen:AddCategories}
},{
navigationOptions:{
  headerStyle:{backgroundColor:'#009688',color:'#fff',aliginItems:'center'},
  headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},
  headerTintColor:'#fff',


}});

const Drawer = DrawerNavigator({
  Home: {
    screen: Stack,
  }
});
module.exports = Drawer;
