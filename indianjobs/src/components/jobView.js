import React, {Component} from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Card,CardItem,List,ListItem} from 'native-base';

export default class ViewJob extends Component {

render() {
return (

<View>
  <View style={{flex: 0, flexDirection: 'row',backgroundColor:'#AA00FF',color:'#fff'}}>

  <View style={{flex: 1,color:'#fff'}}>
  <Button transparent onPress={this.openControlPanel}>
  <Icon style={{color:'#fff'}} name='menu' />
  </Button>
  </View>
  <View style={{flex: 2,color:'#fff'}}>
      <Title style={{color:'#fff',textAlign:'left',marginTop:10}}>HyderabadJobs</Title>
      </View>

  </View>

</View>

);
}
}
module.export = ViewJob;
