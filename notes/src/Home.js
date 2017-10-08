import React from 'react';
import { StyleSheet, View,AsyncStorage,TouchableOpacity,Image,Platform,Keyboard, KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Icon ,Button,Text} from 'native-base';
import { StackNavigator } from 'react-navigation';
import { observer, inject } from "mobx-react";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './logo.png';




 @inject("NotesStore")
@observer
export default class Home extends React.Component {
  static navigationOptions = ({ navigation}) => ({
   title: 'Login',
   headerLeft : <TouchableOpacity onPress={()=>navigation.navigate('DrawerOpen')} style={{marginLeft:10}}  >
                <Icon style={{color:'#fff'}}  name="menu"/>
                </TouchableOpacity>,

 });

 constructor(props){

   super(props);

   this.state={
     message:'',
     disabled:true,
     disabledColor:'#9E9E9E'
   }


 }

 componentWillMount(){
   const NotesStore=this.props.NotesStore;

   NotesStore.checkPass();

 }
 componentDidMount(){



 }
 componentWillUnmount() {

  }



 _handleChangeText(text){
   const NotesStore=this.props.NotesStore;
   NotesStore.savePass(text);
   if(text==""){
       this.setState({
       disabled: true,
       disabledColor:'#9E9E9E'


       });
     }else {
       this.setState({
         disabled: false,
         disabledColor:'#009688'

       });
       NotesStore.savePass(text);

         }

 }
 _getStarted(){
   const NotesStore=this.props.NotesStore;
   const { navigate } = this.props.navigation;
   NotesStore.asyncSavePass();

   navigate('AddCategories');
 }
 _checkLogin(){
   const { navigate } = this.props.navigation;

   const NotesStore=this.props.NotesStore;
   if(NotesStore.password==NotesStore.savedPass){
     this.setState({
       'message':'Successfull'
     });
     navigate('AddCategories');


   }else{
    alert("Wrong Password!");
     this.setState({
       'message':'Wrong Password'
     });
   }

 }
 conditionalButton(){
   const NotesStore=this.props.NotesStore;
   if(NotesStore.savedPass==null || NotesStore.savedPass==""){
       return (<Button  onPress={() => this._getStarted()}  style={[styles.fullButton,{backgroundColor:this.state.disabledColor}]} disabled={this.state.disabled} full info>
               <Text style={{color:'white'}}>Get Started</Text>
           </Button>);

    }else {
      return (<Button  onPress={() => this._checkLogin()} style={[styles.fullButton,{backgroundColor:this.state.disabledColor}]} disabled={this.state.disabled} full info>
              <Text style={{color:'white'}}>Login!</Text>
          </Button>);

    }

 }
  render() {
    const NotesStore=this.props.NotesStore;
    const { navigate } = this.props.navigation;

    return (

      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >

      <Image source={logo} style={styles.logo} />


               <Form>

               <Item  style={styles.input}>
                  <Icon active name='key' />
                  <Input secureTextEntry={true} autoCapitalize = 'none'  placeholder='Password' onChangeText={(text) => this._handleChangeText(text)}/>
               </Item>
                <Item style={[styles.button,{backgroundColor:this.state.disabledColor}]}>
                    {this.conditionalButton()}
                </Item>
               </Form>


           <View style={{ height: 60 }} />

          </KeyboardAvoidingView>


    );
  }
}
