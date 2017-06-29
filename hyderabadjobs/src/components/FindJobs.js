import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {Tabs,Tab,Container,Content,Icon} from 'native-base';
import AppBody from './appBody';
import {DrawerNavigator,StackNavigator} from 'react-navigation';

export default class FindJobs extends Component  {

    render() {
      const { navigate } = this.props.navigator;

        return (
           <AppBody navigator={navigate} jobKey={this.props.navigator.state.params.jobKey} city={this.props.navigator.state.params.city}/>

        );
    }

}



module.export = FindJobs;
