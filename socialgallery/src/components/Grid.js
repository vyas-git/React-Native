/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Container, Header, Content, Card, CardItem, Text, Body,Icon } from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import {AppRegistry,View,FlatList,TouchableHighlight} from 'react-native';
 import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import GridImageElements from './GridImageElements';

 @inject("ImageStore")
@observer export default class GridView extends Component {

 componentWillMount(){
   this.props.ImageStore.fetchGridImages(this.props.ImageStore.images);

 }
  componentDidMount(){


  }

  render() {

    const { navigate } = this.props.navigation;
    console.log('girdImages:'+JSON.stringify(this.props.ImageStore.gridImages));

    let renderImageElements=this.props.ImageStore.gridImages.map((data,index)=>(<GridImageElements navigation={navigate} data={data} />));

return (
  <Container>
    <Content>
{renderImageElements}
    </Content>
  </Container>
);

   }
 }
