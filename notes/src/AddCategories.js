import React from 'react';
import { StyleSheet, Text, FlatList,View,AsyncStorage,TouchableOpacity} from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Form, Item, Input, Label,Icon ,Button} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { observer, inject } from "mobx-react";
import styles from './styles';
import FA from 'react-native-vector-icons/FontAwesome';

 @inject("NotesStore")
@observer
export default class AddCategories extends React.Component {
  static navigationOptions = ({
   title: 'Categories',

 });

 constructor(props){

   super(props);

   this.state={
     catTitle:'',
      disabled:true,
      disabledColor:'#9E9E9E'
   }
 }

 componentWillMount(){

   const NotesStore=this.props.NotesStore;

   NotesStore.getCategories();

 }
 componentDidMount(){
   const NotesStore=this.props.NotesStore;

   NotesStore.getCategories();

 }
 _handleChangeText(text){
   const NotesStore=this.props.NotesStore;
   if(text==""){
       this.setState({
       disabled: true,
       disabledColor:'#9E9E9E'

       });
     }else {
       this.setState({
         disabled: false,
         disabledColor:'#009688',
         catTitle:text

       });

         }

 }

   render() {
    const NotesStore=this.props.NotesStore;
    const { navigate } = this.props.navigation;

    var no_duplicates_arr = NotesStore.savedCategories.filter( function( item, index, inputArray ) {
               return inputArray.indexOf(item) == index;
        });

    let Categories=no_duplicates_arr.map((data,index)=>(
      <Card style={{flexDirection: 'row'}}>

      <TouchableOpacity
       onPress={()=>navigate('NotesList',{category:data})} style={{flex:10}}>
      <CardItem >
                <Text style={{flexDirection: 'row'}}>{data}</Text>
              </CardItem>
              </TouchableOpacity>


              <CardItem style={{flex:1}}>
              <TouchableOpacity
               onPress={()=>NotesStore.deleteCategory(data,index)} style={{flexDirection: 'row'}}>
               <FA style={{color:'red'}} name="trash-o"/>
              </TouchableOpacity>
              </CardItem>

              <CardItem style={{flex:1}}>
              <TouchableOpacity
               onPress={()=>navigate('NotesList',{category:data})} style={{flexDirection: 'row'}}>
               <FA name="arrow-right"/>
              </TouchableOpacity>
              </CardItem>


      </Card>

    ));
    return (
      <Container >
             <Content >
             <Form >
                        <Item floatingLabel bordered underline={true} style={{marginBottom:5}}>
                          <Input underlineColorAndroid='#AA00FF'  ref="title" placeholder="Enter category title" onChangeText={(text) => this._handleChangeText(text)} />
                        </Item>

                        <Item style={[styles.button,{backgroundColor:this.state.disabledColor}]}>

                        <Button  onPress={() => NotesStore.addCategory(this.state.catTitle)} style={[styles.fullButton,{backgroundColor:this.state.disabledColor,alignItems:'center',justifyContent:'center'}]} disabled={this.state.disabled}>
                                <Text style={{color:'white'}}>Add Category</Text>
                        </Button>
                        </Item>
              </Form>



              {Categories}

             </Content>
           </Container>
    );
  }
}
