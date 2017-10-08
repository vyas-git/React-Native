import React from 'react';
import { StyleSheet, Text, FlatList,View,AsyncStorage,TouchableOpacity} from 'react-native';
import { Container, Header,Left, Content, Card, CardItem, Form, Item, Input, Body,Label,Icon ,Button} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { observer, inject } from "mobx-react";
import styles from './styles';

import FA from 'react-native-vector-icons/FontAwesome';

 @inject("NotesStore")
@observer
export default class NotesList extends React.Component {
  static navigationOptions = ({
   title: 'Notes',

 });

 constructor(props){

   super(props);

   this.state={
     title:'',
     description:'',

   }
 }

 componentWillMount(){

   const NotesStore=this.props.NotesStore;
   const { params } = this.props.navigation.state;
   NotesStore.getNotes(params.category);

 }
 componentDidMount(){
   const NotesStore=this.props.NotesStore;
   const { params } = this.props.navigation.state;

   NotesStore.getNotes(params.category);

 }


   render() {
    const NotesStore=this.props.NotesStore;
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    let Notes="";
if(NotesStore.savedNotes.length==0){
  Notes=<Text>No Notes Found Under This Category!</Text>


}else{
  Notes= NotesStore.savedNotes.map((data,index)=>(
      <Card>
              <CardItem header>
              <Left>
              <FA name="sticky-note-o" style={{marginRight:5}}/>

                <Text>{data[0]}</Text>
              </Left>
              </CardItem>


              <CardItem cardBody>
                <Body>
                  <Text style={{marginLeft:5}}>{data[1]}</Text>
                </Body>
              </CardItem>

              <CardItem footer>
                 <TouchableOpacity onPress={()=>NotesStore.deleteNote(index,params.category)} >
                 <FA name="trash-o" style={{color:'red'}}/>
                </TouchableOpacity>
                </CardItem>

      </Card>

    ));
  }
    return (
      <Container>
             <Content>
             <Form>
                        <Item>
                          <Input  underlineColorAndroid='#AA00FF' placeholder="Enter title..." ref="title" onChangeText={(text) => this.setState({title:text})}  />
                        </Item>
                        <Item>
                          <Input underlineColorAndroid='#AA00FF' placeholder="Enter description..."  ref="description" onChangeText={(text) => this.setState({description:text})}  />
                        </Item>

                        <Item style={[styles.button,{backgroundColor:'#009688'}]}>

                        <Button  onPress={() => NotesStore.addNote(this.state.title,this.state.description,params.category)} style={[styles.fullButton,{backgroundColor:'#009688',alignItems:'center',justifyContent:'center'}]}>
                                <Text style={{color:'white'}}>Add Notes</Text>
                        </Button>
                        </Item>



                      </Form>

                      {Notes}

             </Content>
           </Container>
    );
  }
}
