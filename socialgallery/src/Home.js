/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Container, Header, Content, Card, CardItem, Text, Body,Icon } from 'native-base';
 import {AppRegistry,View,FlatList,TouchableHighlight,ScrollView} from 'react-native';
 import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import ImageElements from './components/ImageElements';
import AlbumElements from './components/AlbumElements';
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  console.log('layout.height:'+layoutMeasurement.height,'contentOffsetY:'+contentOffset.y,'contentSize.height:'+  contentSize.height);

  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

 @inject("ImageStore")
@observer export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
   title: 'Gallery',
   headerLeft : <TouchableHighlight style={{marginLeft:10}}  >
   <Icon style={{color:'#fff'}}  name='grid' onPress={()=>navigation.navigate('GridView')}/>
   </TouchableHighlight>,

 });

 componentWillMount(){
   this.props.ImageStore.fetchImages();

 }
  componentDidMount(){

  }

  LoadMoreResults(){
    alert("ok");
  }
  renderComponent(){
    const { navigate } = this.props.navigation;

    if(this.props.ImageStore.isLoading){
      return (<Text>Loading..</Text>);

    }else {
      return (
        <FlatList
      onEndReached={()=>this.props.ImageStore.fetchMoreResults()}

       data={this.props.ImageStore.images.map(function(item) {
         return {
           title: item.title,
           link: item.link
         };
       })}
       renderItem={({item}) => <ImageElements navigation={navigate} data={item} />}
        />
      );
    }
  }
  render() {


    const { navigate } = this.props.navigation;


console.log("ldata"+this.props.ImageStore.images,this.props.ImageStore.isLoading);

return (

  <Container>
{this.renderComponent()}
  </Container>


);

   }
 }
