import React, {Component} from 'react';
import {Text, AppRegistry,View,TouchableHighlight,Navigator} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from './src/themes/components';
import material from './src/themes/variables/material';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
import jobView from './src/components/jobView';

export default class MyProject extends Component {


render() {

  return (
     <Navigator initialRoute={{id:'1'}} renderScene={this.navigatirRenderScene}/>

    );

}
navigatirRenderScene(route,navigator){

  _navigator=navigator;
  switch (route.id) {
    case '1':
    return(
      <StyleProvider style={getTheme(material)}>
           <Container>
             <AppHeader/>
             <AppBody/>
             <AppFooter/>
           </Container>
           </StyleProvider>
    );

      case '2':
      return(<MainSecene navigator={navigator} data={0} what={'What'} where={'Where'} when={'When'}  title='MainSecene'/>);

      case 1:
      return(<MainSecene navigator={navigator} data={1} what={route.text} where={'Where'} when={'When'} title='Where-Secene'/>);

      case 2:
      return(<MainSecene navigator={navigator} data={2} what={route.prevText} where={route.text} when={'When'} title='Where-Secene'/>);
      case 3:
      return(<AppHeader navigator={navigator} what={route.what} where={route.where} when={route.when} />);


      break;
    default:

  }
}

}

AppRegistry.registerComponent('indianjobs', () => MyProject);
