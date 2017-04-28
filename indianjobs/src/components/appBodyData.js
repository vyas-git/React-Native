import React, {Component} from 'react';
import { Image,Text,TouchableHighlight,Navigator} from 'react-native';
import {Header,Left,Toast,Button, Icon, Title, Body, Right,Content,Container,Card,CardItem,List,ListItem} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

let start_val=0;

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

    var contentOffset = e.nativeEvent.contentOffset.y;
    this.state.contentOffsetY < contentOffset ? this.getMoreJobs(start_val*10) : console.log("Scroll Up");
    this.setState({contentOffsetY: contentOffset, visible: !this.state.visible});
    start_val++;

  }

getMoreJobs(start){


  fetch('http://api.indeed.com/ads/apisearch?publisher=1638164786858930&q=walk-in&co=in&l=Hyderabad&v=2&format=json&start='+start+'').then((response) => response.json()) .then((responseJson) => {
  this.setState({
  data:responseJson.results,
  });
   }).catch((error) => {
     this.setState({
       data:'No Internet Connection',
       isLoading:true,
       visible: false,

     });

   });


  let titles=this.state.data.map((data,index)=>(
  <Card key={index+start}>
                      <CardItem>
                          <Left>
                          <Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>#{index+start+1}</Text>
                              <Body>
                                  <Text style={{fontWeight:'bold'}}>{data.jobtitle}</Text>
                                  <Text note><Text style={{fontWeight:'bold',color:'#000'}}>Company</Text> - {data.company}</Text>
                                  <Text note><Text style={{fontWeight:'bold',color:'#000'}}>Source</Text> - {data.source}</Text>

                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                              <Text>{data.snippet}</Text>
                              <Button transparent textStyle={{color: '#AA00FF'}}>
                              <Icon style={{color: '#AA00FF'}} name="time" />
                              <Left><Text style={{textAlign:'left'}}> {data.date}</Text></Left>
                              </Button>
                              <Button style={{backgroundColor:'#263238'}} full>
                              <Text style={{color:'#fff'}}>View/Apply Now</Text>
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
componentDidMount(){

let titles=this.props.data.map((data,index)=>(
<Card key={index}>
                    <CardItem>
                        <Left>
                        <Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>#{index+1}</Text>
                            <Body>
                                <Text style={{fontWeight:'bold'}}>{data.jobtitle}</Text>
                                <Text note><Text style={{fontWeight:'bold',color:'#000'}}>Company</Text> : {data.company}</Text>
                                <Text note><Text style={{fontWeight:'bold',color:'#000'}}>Source</Text> : {data.source}</Text>

                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{data.snippet}</Text>
                            <Button transparent textStyle={{color: '#AA00FF'}}>
                            <Icon style={{color: '#AA00FF'}} name="time" />
                            <Left><Text style={{textAlign:'left'}}> {data.date}</Text></Left>
                            </Button>
                            <Button style={{backgroundColor:'#263238'}} full>
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
     <Spinner visible={this.state.visible}  color={"#D500F9"} textStyle={{color:'black'}} textContent={"Loading..."} textStyle={{color: '#FFF'}} />

 </Container>

    );
}

onnavigate(title,company,snippet,url){

        this.props.navigator.push({

          id:2,
          jobtitle:title,
          company:company,
          snippet:snippet,
          url:url

        }

        );
    }


}
module.export = AppBodyData;
