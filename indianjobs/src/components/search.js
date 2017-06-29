import React, {Component} from 'react';
import {View,TextInput,Picker,StyleSheet,Navigator} from 'react-native';
const Item = Picker.Item;
import { Container, Content, Button, Text } from 'native-base';
import {DrawerNavigator,StackNavigator} from 'react-navigation';

export default class SearchJobs extends Component  {
  constructor(){

    super();
    this.state={

      selected1:'Chennai',
      text: '',
      disabled:true,
      mode: Picker.MODE_DIALOG,
      disabledColor:'#9E9E9E'

    };




  }
  changeText(text){

    this.setState({text:text});
    if(text==""){
      this.setState({
      disabled: true,
      disabledColor:'#9E9E9E'


      });
    }else {
      this.setState({
        disabled: false,
        disabledColor:'#AA00FF'

      });
        }
  }

onValueChange (value: string) {
    this.setState({
        selected1 : value
    });


}



    render() {
      const { navigate } = this.props.navigation;

        return (
          <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
    <TextInput style={{height: 40, width:'90%',underlineColorAndroid:'#AA00FF',placeholderTextColor:'#AA00FF'}} underlineColorAndroid='#AA00FF'  placeholder="Enter Job Keywords" onChangeText={(text) => this.changeText(text)}
               />

    <Picker border="1" style={{width:'90%'}} selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="Hyderabad" value="Hyderabad" />
              <Item label="Bangalore" value="Bangalore" />
              <Item label="Chennai" value="Chennai" />
              <Item label="Mumbai" value="Mumbai" />
              <Item label="Pune" value="Pune" />
              <Item label="Delhi" value="Delhi" />

    </Picker>
           <Button  onPress={() => navigate('SearchJobs',{jobKey: this.state.text,city:this.state.selected1})} block style={{backgroundColor:this.state.disabledColor,width:'90%',marginLeft:'5%'}} disabled={this.state.disabled}>
               <Text style={{color:'white'}}>Search Jobs</Text>
           </Button>

</View>
        );
    }
}

module.export = SearchJobs;
