import React,{Component} from 'react';
import   { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import {TouchableWithoutFeedback,AsyncStorage} from 'react-native';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import FastImage from 'react-native-fast-image';
import { createImageProgress } from 'react-native-image-progress';
// Wrap FastImage with react-native-image-progress.
//import Image from 'react-native-image-progress';
import * as  Progress from 'react-native-progress';
const Image = createImageProgress(FastImage);

@inject('ImageStore')
@observer
export default class AlbumElements extends Component {
render(){
  let imageElements=this.props.data.images.map((data,index)=>(
<Card key={index}>
     <CardItem header>
      <Text>{this.props.albumtitle}</Text>
     </CardItem>
      <CardItem cardBody>
          <TouchableWithoutFeedback key={index}
          onPress={()=>this.props.navigation('ImageView',{link: _.replace(this.props.data.link, 'http://', 'https://')})}>
          <Image source={{uri:data.link}} style={{height: 400, width: null, flex: 1}}/>
          </TouchableWithoutFeedback>

      </CardItem>

</Card>


 ));
  return(
<Content>
{imageElements}
</Content>
  );

}

 }
