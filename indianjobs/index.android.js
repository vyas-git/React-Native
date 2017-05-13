import React, {Component} from 'react';
import {Text, ScrollView,AppRegistry,View,TouchableHighlight,Navigator,NetInfo} from 'react-native';
import {Container,Icon} from 'native-base';
import AppHeaderTabs from './src/components/appHeaderTabs';
import iAppHeaderTabs from './src/components/iAppHeaderTabs';
import ViewJob from './src/components/jobView';
import TopRecruitments from './src/components/topRecruitments';

import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
import {DrawerNavigator,StackNavigator,TabNavigator} from 'react-navigation';
import { DrawerItems} from 'react-navigation';


export default class MyProject extends Component {
  state = {isConnected: null};
  static navigationOptions = ({ navigation }) => ({
  headerTitle: 'HyderabadJobs',
  headerStyle:{backgroundColor:'#AA00FF'},
  headerTitleStyle:{color:'white',aliginItems:'center'},
  headerLeft : <TouchableHighlight style={{marginLeft:5}}>
  <Icon style={{color:'#fff'}}  name='menu'/>

  </TouchableHighlight>

});
constructor(){
  super();

}
componentDidMount() {
StatusBarManager.setColor(processColor('#D500F9'), false);
  NetInfo.isConnected.addEventListener('change',this._handleConnectivityChange);
  NetInfo.isConnected.fetch().done((isConnected) => { this.setState({isConnected}); });


}



componentWillUnmount() {


  NetInfo.isConnected.removeEventListener('change',this._handleConnectivityChange);
}
_handleConnectivityChange = (isConnected) => {this.setState({isConnected,});};
render() {
  const { navigate } = this.props.navigation;
  const drawerStyles = {drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},main: {paddingLeft: 0},}
  return (<AppHeaderTabs navigator={navigate} jobKey={this.props.jobKey}/>);

}





} // end class MyProject

const TabBar = TabNavigator({
  Walkins: {screen: MyProject},
  TopJobs: { screen: ({navigation})=><TopRecruitments navigator={navigation} />},
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 12,
      color:'black'

    },
    style: {
      backgroundColor: '#9E9E9E',
      shadowColor: '#000000',



    },
    upperCaseLabel:false,
    tabStyle:{shadowColor: '#000000'},
    shadowColor: '#000000',
    tabBarShadowColor:'#AA00FF',

  }
}
);




const DrawerView = DrawerNavigator(
  {
  Home: { screen: TabBar },
  Walkins: { screen: TabBar },
  TopRecruitments: { screen: ({navigation})=><TopRecruitments navigator={navigation} />},
  Fresher: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Fresher"}/>},
  Internship: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:intern"}/>},
  Electrical: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:electric"}/>},
  Mechanical: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:mech"}/>},
  Marketing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Marketing"}/>},
  Marketing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Marketing"}/>},
  Hr: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Hr"}/>},

  Android: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Android"}/>},
  Bpo: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"bpo,voice"}/>},

  DotNet: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:.Net"}/>},
  Ios: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:.ios"}/>},

  Java: {screen: ({navigation})=><MyProject navigation={navigation} title={"Java Jobs"} jobKey={"title:java"}/>},
  Php: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Php"}/>},
  Sap: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:SAP"}/>},
  Seo: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Seo"}/>},

  Testing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:testing"}/>},
  Web: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Web"}/>},


},
 {
    contentOptions: {activeTintColor:"white",style:{marginVertical: 0,backgroundColor:'#9E9E9E'},labelStyle:{color:'#000',fontFamily: 'Cochin',fontSize:15,fontWeight: 'normal'}},
    contentComponent:props=><ScrollView><DrawerItems  {...props}/></ScrollView>


}
);
const StatusBarColorChanger=function(drawerstatus){

  if(drawerstatus==0){

    return StatusBarManager.setColor(processColor('#D500F9'), false);

  }
  else {
    return StatusBarManager.setColor(processColor('#9E9E9E'), false);

}


}
DrawerView.navigationOptions = ({ navigation}) => ({

  headerTitle: 'HyderabadJobs - indianJobs.co.in',
  headerStyle:{backgroundColor:'#AA00FF'},
  headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},

  headerLeft : <TouchableHighlight style={{marginLeft:5}}  onPress={()=>
  navigation.navigate('DrawerOpen'),
  StatusBarColorChanger(navigation.state.index)

}
 >
  <Icon style={{color:'#fff'}}  name='menu' onPress={()=>navigation.navigate('DrawerOpen')}/>
  </TouchableHighlight>,
  headerRight : <TouchableHighlight style={{marginRight:20}} >
  <Icon style={{color:'#fff'}}  name='refresh' onPress={()=>navigation.navigate('Home')}/>
  </TouchableHighlight>
});




const Main = StackNavigator({

  Home : { screen: DrawerView },
  JobView: { screen: ViewJob },
  TopRecruitments: { screen: ({navigation})=><TopRecruitments navigator={navigation} />},


});




AppRegistry.registerComponent('HyderabadJobs', () => Main);
