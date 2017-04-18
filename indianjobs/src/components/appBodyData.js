import React, {Component} from 'react';
import { Image,Text,TouchableHighlight} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Card,CardItem,List,ListItem} from 'native-base';


export default class AppBodyData extends Component  {
  onnavigate(title,company,snippet,url){

    this.props.navigator.push({

      id:2,
      jobtitle:title,
      company:company,
      snippet:snippet,
      url:url,

    }

    );
  }

    render() {
      const b = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

      let titles=this.props.data.map(function(data,index){

        let snippet=data.snippet.replace("<b>","");
        snippet=snippet.replace("</b>","");
return(
/*
  <Card>

                   <CardItem>
                            <Left>
                                <Body>
                                    <Text>{data.jobtitle}</Text>
                                    <Text note>{data.company}</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image/>
                          </CardItem>
                          <CardItem content>

                              <Text>{snippet}</Text>
                          </CardItem>
                          <CardItem>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                              <Text>11h ago</Text>
                        </CardItem>

  </Card>*/
                        <ListItem>
                        <TouchableHighlight onPress={this.onnavigate("jkjk","jhjh",snippet,"kjbj")}>
  <Text>{data.jobtitle}</Text>
  </TouchableHighlight>

                        </ListItem>

);
      });
      return(
      <Content>
      <List>

       {titles}
       </List>

      </Content>
    );
    }
}
module.export = AppBodyData;
