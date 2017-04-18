import React, {Component} from 'react';
import {Text} from 'react-native';
import {Header,Left, Button, Icon, Title, Body, Right,Content,Card,CardItem,List,ListItem} from 'native-base';

export default class ViewJob extends Component {

render() {
return (
  <Card>

                   <CardItem>
                            <Left>
                                <Body>
                                    <Text>{this.props.title}</Text>
                                    <Text note>{this.props.company}</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image/>
                          </CardItem>
                          <CardItem content>

                              <Text>{this.props.snippet}</Text>
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

  </Card>

);
}
}
module.export = ViewJob;
