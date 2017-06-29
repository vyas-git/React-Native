import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {Tabs,Tab,Container,Content} from 'native-base';
import IAppBody from './iappBody';

export default class IAppHeaderTabs extends Component  {
    render() {

        return (
           <IAppBody navigator={this.props.navigator} jobKey={this.props.jobKey}/>

        );
    }
}

module.export = IAppHeaderTabs;
