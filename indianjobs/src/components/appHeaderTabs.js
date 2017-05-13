import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {Tabs,Tab,Container,Content} from 'native-base';
import AppBody from './appBody';

export default class AppHeaderTabs extends Component  {

    render() {

        return (
           <AppBody navigator={this.props.navigator} jobKey={this.props.jobKey}/>

        );
    }
}

module.export = AppHeaderTabs;
