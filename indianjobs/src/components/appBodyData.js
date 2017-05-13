import React, {Component} from 'react';
import { Image,Text,TouchableHighlight,Navigator} from 'react-native';
import {Header,Left,Toast,Button, Icon, Title, Body, Right,Content,Container,Card,CardItem,List,ListItem} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import Fa from 'react-native-vector-icons/FontAwesome';


let start_val=1;

export default class AppBodyData extends Component  {


constructor(){

  super();
  this._onScroll = this._onScroll.bind(this)

  this.state={

    jobResults:[],
    contentOffsetY:0,
    data:[],
    visible: false,



  };


}
_onScroll(e){
  this.setState({visible: false});

    var contentOffset = e.nativeEvent.contentOffset.y;
    this.state.contentOffsetY < contentOffset ? this.getMoreJobs(start_val*10) : console.log("Scroll Up");
    this.setState({contentOffsetY: contentOffset, visible: !this.state.visible});

  }

getMoreJobs(start){
/*  fetch('http://api.indeed.com/ads/apisearch?publisher=1638164786858930&q=walk-in&co=in&l=Hyderabad&v=2&format=json&sort=date&highlight=0&start='+start+'').then((response) => response.json()) .then((responseJson) => {
  this.setState({
  data:responseJson.results,
  });
  start_val++;

   }).catch((error) => {
     this.setState({
       data:'No Internet Connection',
       isLoading:true,
       visible: false,

     });

   });

   */
   if(start==10){
start_val++
const data_arr=[0];

  let titles=data_arr.map((data,index)=>(
  <Card key="finished">
  <CardItem>
      <Body>
      <Left>
<Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>No More Active Job Results.</Text>
</Left>
          <Left><Text style={{textAlign:'left',fontSize: 18,color:'#1B5E20'}}>We render only fresh and active jobs. Try tommorrow for new job openings Thank You!.</Text></Left>
          <Button onPress={()=>this.props.navigator('Home')} style={{backgroundColor:'#4CAF50'}} full>
          <Text style={{color:'#fff'}}>Refresh</Text>
          </Button>
      </Body>
  </CardItem>

                 </Card>


  ));

  this.state.jobResults.push(titles);

  this.setState({

    jobResults:this.state.jobResults,
    visible: false


  });
}




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
                  <Button onPress={() => this.props.navigator('JobView',{'url':data.url})} style={{backgroundColor:'#263238'}} full>
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
     <Content onScroll={this._onScroll}>
{this.state.jobResults}
     </Content>

 </Container>

    );
}




}
module.export = AppBodyData;
