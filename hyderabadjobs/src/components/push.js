import React, {Component} from 'react';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
import {setJSExceptionHandler} from 'react-native-exception-handler';


import { NavigationActions } from 'react-navigation'
AdMobInterstitial.setAdUnitID('ca-app-pub-9438822169696046/2438998612');

export default class Push extends Component {


  constructor(){
      super();

  }


componentDidMount(){
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
this.notificationListener.remove();
}


  render() {return null;}

}


module.export = Push;
