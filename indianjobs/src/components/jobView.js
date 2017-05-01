import React, {Component} from 'react';
import {Text,View,TouchableHighlight,WebView} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Card,CardItem,List,ListItem} from 'native-base';
import Drawer from 'react-native-drawer';
import SideBarContent from './SideBarContent';
const { StatusBarManager } = NativeModules;

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 0},
}

export default class ViewJob extends Component {

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



  render() {
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
     <View>
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
   <WebView
     source={{uri: ''+this.props.url+''}}
     style={{marginTop: 20}}
   />
   </View>
           </Drawer>

       );

   }
}
module.export = ViewJob;
