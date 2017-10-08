import React, {Component} from 'react';
import {Text, ScrollView,AppRegistry,View,TouchableHighlight,Navigator,NetInfo,Platform,Linking} from 'react-native';
import {Container,Icon} from 'native-base';
import AppHeaderTabs from './src/components/appHeaderTabs';
import Globals from './src/components/Globals';
import SearchJobs from './src/components/search';
import iAppHeaderTabs from './src/components/iAppHeaderTabs';
import ViewJob from './src/components/jobView';
import FindJobs from './src/components/FindJobs';
import RateUs from './src/components/rateUs';
import TopRecruitments from './src/components/topRecruitments';
import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
import {DrawerNavigator,StackNavigator,TabNavigator} from 'react-navigation';
import { DrawerItems} from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded} from 'react-native-admob';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import {setJSExceptionHandler} from 'react-native-exception-handler';


export default class MyProject extends Component {


  state = {isConnected: null};

constructor(){
  super();
}
componentDidMount() {
StatusBarManager.setColor(processColor('#D500F9'), false);
NetInfo.isConnected.addEventListener('change',this._handleConnectivityChange);
NetInfo.isConnected.fetch().done((isConnected) => { this.setState({isConnected}); });

this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
    // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
    if(notif.local_notification){
      //this is a local notification
      return "JobView";
    }
    if(notif.opened_from_tray){
      //app is open/resumed because user clicked banner
      if(notif.url=="" || notif.url==undefined || notif.url=="undefined"){

      }
      else {this.props.navigation.navigate('JobView',{'url':notif.url});}
      return "JobView";
    }
    await someAsyncCall();

    if(Platform.OS ==='android'){
      //optional
      //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
      //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
      //notif._notificationType is available for iOS platfrom

    }
});
}
componentWillUnmount() {
NetInfo.isConnected.removeEventListener('change',this._handleConnectivityChange);
// stop listening for events
this.notificationListener.remove();
}



_handleConnectivityChange = (isConnected) => {this.setState({isConnected,});};
render() {
  const { navigate } = this.props.navigation;
  return (


    <AppHeaderTabs navigator={navigate} jobKey={this.props.jobKey}/>
  );

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

  "Search Jobs": { screen: ({navigation})=><SearchJobs navigation={navigation} jobKey={"title:Web"}/>},
  "Rate Us *": { screen: ({navigation})=><RateUs navigation={navigation} url={Globals.playstoreurl}/>},
  Walkins: { screen: TabBar},
  "Top MNC Recruitments": { screen: ({navigation})=><TopRecruitments navigator={navigation} />},
  "Fresher Jobs": { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Fresher"}/>},
  Internship: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:internship,intern"}/>},
  "Electrical Engg Jobs": { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"electrical"}/>},
  "Mechanical Engg Jobs": { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"mechanical"}/>},
  Marketing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Marketing"}/>},
  Marketing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Marketing"}/>},
  Hr: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Hr"}/>},
  Android: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Android"}/>},
  Bpo: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"bpo,voice"}/>},
  'C++': { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:c++"}/>},
  "Dot Net": { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:.Net"}/>},
  Ios: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:ios"}/>},
  Java: {screen: ({navigation})=><MyProject navigation={navigation} title={"Java Jobs"} jobKey={"title:java"}/>},
  Php: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Php"}/>},
  Sap: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:SAP"}/>},
  Seo: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Seo"}/>},
  Testing: { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:testing"}/>},
  "Web/UI": { screen: ({navigation})=><MyProject navigation={navigation} jobKey={"title:Web"}/>}



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

  headerTitle: Globals.title,
  headerStyle:{backgroundColor:'#AA00FF'},
  headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},
  headerLeft : <TouchableHighlight style={{marginLeft:5}}  onPress={()=>
  navigation.navigate('DrawerOpen'),
  StatusBarColorChanger(navigation.state.index)

}
 >
  <Icon style={{color:'#fff'}}  name='menu' onPress={()=>navigation.navigate('DrawerOpen')}/>
  </TouchableHighlight>,
  headerRight : <TouchableHighlight onPress={()=>navigation.navigate('Reload')} style={{marginRight:20}} >
  <Icon style={{color:'#fff'}}  name='refresh' onPress={()=>navigation.navigate('Reload')}/>
  </TouchableHighlight>
});




const Main  = StackNavigator({

  Home : { screen: DrawerView },
  JobView: { screen: ViewJob },
  TopRecruitments: { screen: ({navigation})=><TopRecruitments navigator={navigation} />},
  SearchJobs: { screen: ({navigation})=><FindJobs navigator={navigation} />},
  Reload: { screen: DrawerView},


},
{
navigationOptions:{
  headerTitle: Globals.title,
  headerStyle:{backgroundColor:'#AA00FF',color:'#fff'},
  headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},
headerTintColor:'#fff'
}
}

);

const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
    `
    Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

    We have reported this to our team ! Please close the app and start again!
    `,
      [{
        text: 'Restart',
        onPress: () => {
          RNRestart.Restart();
        }
      }]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);





AppRegistry.registerComponent('mumbaijobs', () => Main);
