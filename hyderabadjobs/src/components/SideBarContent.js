import React, {Component} from 'react';
import {Text,View} from 'react-native';

import {Container,Content,List,ListItem} from 'native-base';


export default class SideBarContent extends Component{
        constructor() {
            super();
        }
        render()
        {
            return(

                <Container style={{backgroundColor:'#263238',flex:1}}>
               <Content>
                   <List>
                       <ListItem itemDivider>
                           <Text>A</Text>
                       </ListItem>
                       <ListItem >
                           <Text>Aaron Bennet</Text>
                       </ListItem>
                       <ListItem>
                           <Text>Ali Connors</Text>
                       </ListItem>
                       <ListItem itemDivider>
                           <Text>B</Text>
                       </ListItem>
                       <ListItem>
                           <Text>Bradley Horowitz</Text>
                       </ListItem>
                   </List>
               </Content>
           </Container>
            );
        }
    }
module.export = SideBarContent;
