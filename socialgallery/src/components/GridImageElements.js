import React,{Component} from 'react';
import   { Container, Header, Content, Card, CardItem, Text, Body,Grid,Row,Col} from 'native-base';
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
export default class GridImageElements extends Component {
render(){
  let GridImages=this.props.data.map((data,index)=>(


                <Col key={index} style={{ height: 200,margin:3 }}>

              <TouchableWithoutFeedback
              onPress={()=>this.props.navigation('ImageView',{title:data.title,link: _.replace(data.link, 'http://', 'https://')})}>
              <Image
              source={{ uri: _.replace(data.link, 'http://', 'https://') ,
                priority: FastImage.priority.normal,
    }}

               style={{height: 100, width: null, flex: 1}}

               indicator={Progress}

               />
              </TouchableWithoutFeedback>

    </Col>
  ));

  return(

<Content>
<Grid>
<Row>
{GridImages}
</Row>
</Grid>

</Content>
  );

}

 }
