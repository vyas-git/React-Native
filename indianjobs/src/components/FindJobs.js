import React, {Component} from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {Tabs,Tab,Container,Content,Icon} from 'native-base';
import AppBody from './appBody';
import {DrawerNavigator,StackNavigator} from 'react-navigation';

export default class FindJobs extends Component  {

    render() {

        return (
           <AppBody navigator={this.props.navigation} jobKey={this.props.navigation.state.params.jobKey} city={this.props.navigation.state.params.city}/>

        );
    }
    static navigationOptions = ({ navigation }) => ({
      headerTitle: 'HyderabadJobs - indianJobs.co.in',
      headerStyle:{backgroundColor:'#AA00FF'},
      headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},

    headerLeft:<Icon  style={{color:'white',marginLeft:5}} name={'arrow-back'} onPress={()=>navigation.goBack()}  />
  });
}

module.export = FindJobs;
