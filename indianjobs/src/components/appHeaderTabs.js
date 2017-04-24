import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {Tabs,Tab,Header,Icon, Title, Body, Right,Container,Content,Button,Left} from 'native-base';
import AppBody from './appBody';

export default class AppHeaderTabs extends Component  {

    render() {
        return (
          <Container>

<Tabs tabBarUnderlineStyle={{backgroundColor:'#000'}}>
          <Tab heading="Walk-ins" tabStyle={{backgroundColor: '#AA00FF'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#AA00FF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
              <AppBody navigator={this.props.navigator}/>
              </Tab>
              <Tab heading="#Top" tabStyle={{backgroundColor: '#AA00FF'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#AA00FF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
              <AppBody navigator={this.props.navigator}/>
              </Tab>
              <Tab heading="More Jobs" tabStyle={{backgroundColor: '#AA00FF'}}  textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#AA00FF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
              <AppBody navigator={this.props.navigator}/>
              </Tab>
          </Tabs>
          </Container>
        );
    }
}

module.export = AppHeaderTabs;
