import React, {Component} from 'react';
import { Image,Text,TouchableHighlight,Navigator} from 'react-native';
import {Header,Left,Toast,Button, Icon, Title, Body,Thumbnail, Right,Content,Container,Card,CardItem,List,ListItem} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Fa from 'react-native-vector-icons/FontAwesome';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob';


export default class IAppBodyData extends Component  {


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

let titles=this.props.data.map((data,index)=>{
  if(typeof data.media$thumbnail=="undefined"){

    var imagelogo="https://1.bp.blogspot.com/-RfcO2IAKGdo/WRNigS9aOyI/AAAAAAAADLU/FlR1eLVk_gg4NUVeflKZSCNvtmVXUcOPACLcB/s320/13322199_922723157850289_3443513996802996809_n.png";
  }else{
    var imagelogo=data.media$thumbnail.url;
  }

var datesplitted=data.published.$t.split("T")[0].split("-");
var newDate=datesplitted[2]+"-"+datesplitted[1]+"-"+datesplitted[0];

return(
  <Card key={index}>
  <CardItem>
                           <Left>
                               <Thumbnail source={{uri: imagelogo}} />
                               <Body>
                               <Text>{data.title.$t}</Text>

                               </Body>
                           </Left>
</CardItem>
  <CardItem>
    <Body>
        <Button transparent textStyle={{color: '#AA00FF'}}>

        <Left>
        <Text note><Fa style={{color: '#AA00FF'}} name="external-link" /> - indianJobs.co.in</Text>

        <Text note><Fa style={{color: '#AA00FF'}} name="clock-o" /> {newDate}</Text>
        </Left>
        </Button>
        <Button onPress={()=>this.props.navigator('JobView',{'url':data.link[4].href+"?source=hyderabadapp"})} style={{backgroundColor:'#263238'}} full>
        <Text style={{color:'#fff'}}>View/Apply Now</Text>
        </Button>
    </Body>
</CardItem>
               </Card>
             );


});


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
module.export = IAppBodyData;
