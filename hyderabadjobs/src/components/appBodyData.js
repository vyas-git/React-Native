import React, {Component} from 'react';
import { Image,Text,TouchableHighlight,Navigator} from 'react-native';
import {Header,Left,Toast,Button, Icon, Title, Body, Right,Content,Container,Card,CardItem,List,ListItem} from 'native-base';
import Fa from 'react-native-vector-icons/FontAwesome';
import Globals from './Globals';

import {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded} from 'react-native-admob';


export default class AppBodyData extends Component  {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: Globals.title,
    headerStyle:{backgroundColor:'#AA00FF'},
    headerTitleStyle:{color:'white',aliginItems:'center',fontSize:15},

  headerLeft:<Icon  style={{color:'white',marginLeft:5}} name={'arrow-back'} onPress={()=>navigation.goBack()}  />
});
constructor(){

  super();

  this.state={

    jobResults:[],
    contentOffsetY:0,
    data:[],
    visible: false,



  };


}
componentDidMount(){

let titles=this.props.data.map((data,index)=>(
<Card key={index}>
                    <CardItem>
                        <Left>
                        <Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>#{index+1}</Text>
                            <Body>

                                <Text style={{fontWeight:'bold'}}>{data.jobtitle}</Text>

                                <Text note><Fa style={{color: '#AA00FF'}} name="building-o" /> - {data.company}</Text>
                                <Text note><Fa style={{color: '#AA00FF'}} name="external-link" /> - {data.source}</Text>
                                <Text note><Fa style={{color: '#AA00FF'}} name="map-marker" /> - {data.formattedLocation}</Text>

                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{data.snippet.replace('<b>','').replace('</b>','')}</Text>
                            <Button transparent textStyle={{color: '#AA00FF'}}>
                            <Icon style={{color: '#AA00FF'}} name="time" />
                            <Left><Text style={{textAlign:'left'}}> {data.date}</Text></Left>
                            </Button>
                  <Button onPress={() => this.props.navigator('JobView',{'url':data.url.replace('viewjob','rc/clk')})} style={{backgroundColor:'#263238'}} full>
                            <Text style={{color:'#fff'}}   >View/Apply Now</Text>
                            </Button>
                        </Body>
                    </CardItem>
               </Card>


));


this.setState({
  jobResults:titles,
  visible: false

});




}


    render() {

 return(
   <Container>
   <AdMobBanner bannerSize="fullBanner" adUnitID="ca-app-pub-9438822169696046/7928959012" didFailToReceiveAdWithError={this.bannerError} />

     <Content>

{this.state.jobResults}
     </Content>

 </Container>

    );
}




}
module.export = AppBodyData;
