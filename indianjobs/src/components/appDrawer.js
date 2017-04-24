import React, {Component} from 'react';
import {Image,View,StyleSheet,Text} from 'react-native';
import Drawer from 'react-native-drawer';
import {Tabs,Tab,Header,Icon, Title, Body, Right,Container,Button,Left} from 'native-base';
/*** Status Bar Color Change ***/

import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;

/*** Status Bar Color Change ***/

import AppHeaderTabs from './appHeaderTabs';
import AppFooter from './appFooter';


import SideBarContent from './SideBarContent';
export default class AppDrawer extends Component  {

constructor(){
    super();
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);

}

closeControlPanel = () => {
    this.refs.drawer.close()

};
openControlPanel = () => {
    this.refs.drawer.open()
    StatusBarManager.setColor(processColor('#263238'), false);

};


componentDidMount() {
  /* Change color status bar after componentDidMount **/
  StatusBarManager.setColor(processColor('#D500F9'), false);



}
render()
{
    const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 0},
    }

    return (
      <Drawer
        ref="drawer"
        type="overlay"
        content={<SideBarContent />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        onClose={()=>StatusBarManager.setColor(processColor('#D500F9'), false)}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
  >
  <View style={{flex: 0, flexDirection: 'row',backgroundColor:'#AA00FF'}}>

<View style={{flex: 1}}>
<Button transparent onPress={this.openControlPanel}>
    <Icon style={{color:'#fff'}} name='menu' />
</Button>
      </View>
      <View style={{flex: 2}}>
          <Title style={{color:'#fff',textAlign:'left',marginTop:10}}>HyderabadJobs</Title>
          </View>

</View>
<AppHeaderTabs navigator={this.props.navigator}/>

        </Drawer>

    );
}
}
module.export = AppDrawer;
