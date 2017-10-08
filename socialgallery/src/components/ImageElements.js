import React,{Component} from 'react';
import   { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import {TouchableWithoutFeedback,AsyncStorage,FlatList} from 'react-native';
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
export default class ImageElements extends Component {
render(){

  return(

<Content>
<Card>
     <CardItem header>
      <Text>{this.props.data.title}</Text>
     </CardItem>
      <CardItem cardBody>
          <TouchableWithoutFeedback
          onPress={()=>this.props.navigation('ImageView',{title:this.props.data.title,link: _.replace(this.props.data.link, 'http://', 'https://')})}>
          <Image
          source={{ uri: _.replace(this.props.data.link, 'http://', 'https://') ,
            priority: FastImage.priority.normal,
}}

           style={{height: 400, width: null, flex: 1}}

           indicator={Progress}

           />
          </TouchableWithoutFeedback>
      </CardItem>

</Card>
</Content>
  );

}

 }
