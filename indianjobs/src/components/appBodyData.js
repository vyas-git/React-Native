import React, {Component} from 'react';
import { Image,Text,TouchableHighlight,Navigator} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Container,Card,CardItem,List,ListItem} from 'native-base';


export default class AppBodyData extends Component  {


constructor(){

  super();
  this._onScroll = this._onScroll.bind(this)

  this.state={

    jobResults:[],
    contentOffsetY:0,

  };


}
_onScroll(e){
    var contentOffset = e.nativeEvent.contentOffset.y;
    this.state.contentOffsetY < contentOffset ? this.getMoreJobs() : console.log("Scroll Up");
    this.setState({contentOffsetY: contentOffset});
  }

getMoreJobs(){
  let titles=this.props.data.map((data,index)=>(
  <Card key={index}>
                      <CardItem>
                          <Left>
                          <Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>#{index+1}</Text>
                              <Body>
                                  <Text>{data.jobtitle}</Text>
                                  <Text note><Text style={{fontWeight:'bold'}}>Company</Text> : {data.company}</Text>
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

    //jobResults:this.state.jobResults,

  });



}
componentDidMount(){
let titles=this.props.data.map((data,index)=>(
<Card key={index}>
                    <CardItem>
                        <Left>
                        <Text style={{fontWeight:'bold',fontSize: 20,color:'#AA00FF'}}>#{index+1}</Text>
                            <Body>
                                <Text>{data.jobtitle}</Text>
                                <Text note><Text style={{fontWeight:'bold'}}>Company</Text> : {data.company}</Text>
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
