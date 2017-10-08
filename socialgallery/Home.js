/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
 import { Col, Row, Grid } from 'react-native-easy-grid';
 import {AppRegistry} from 'react-native';
 import { observable } from "mobx";
import { observer, inject } from "mobx-react";

 @inject("ImageStore")
@observer
 export default class LayoutExample extends Component {
   render() {
     return (
       <Container>
         <Header />
         <Content>
{this.ImageStore.imageElements}
         </Content>
       </Container>
     );
   }
 }

AppRegistry.registerComponent('socialgallery', () => LayoutExample);
