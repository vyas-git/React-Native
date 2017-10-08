import React,{Component} from 'react';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Easing} from 'react-native';
import {Modal,BackHandler,View} from 'react-native';
import { observer, inject } from "mobx-react";
import Image from 'react-native-transformable-image';
import Lightbox from 'react-native-lightbox';

import * as  Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import {Header,Left,Title,Button, Icon, Text } from 'native-base';

const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}];

@inject('ImageStore')
@observer export default class ImageView extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title,
  });
  constructor(props){
      super(props)
      this.state={mynavigation:this.props.navigation};

  }


  componentDidMount(){

    let nav=this.props.navigation;
    BackHandler.addEventListener('hardwareBackPress', function() {
    // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
    // Typically you would use the navigator here to go to the last state.
    nav.goBack();
    return true;
    });
  }



render(){
  const { params } = this.props.navigation.state;



  return(

    // in render function
    <Image style={{flex: 1,
    resizeMode: 'cover'}} source={{uri: params.link}}
              //pixels={{width: 3607, height: 2400}}
            />


  );

}


 }
