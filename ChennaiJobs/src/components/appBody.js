import React, {Component} from 'react';
import {Text,Navigator,View,TouchableOpacity} from 'react-native';
import AppBodyData from './appBodyData';
import Globals from './Globals';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AppBody extends Component {

  constructor(){

    super()
    this.state={

      data:[],
      isLoading:true,
      connection:true

    }
  }

  getData(){

if(this.props.jobKey=="undefined" || this.props.jobKey==undefined){
  var jobKey="walk-in";

}else {


  var jobKey=this.props.jobKey;


}
if(this.props.city=="undefined" || this.props.city==undefined){
  var city=Globals.city;

}else {


  var city=this.props.city;


}


    return fetch('http://api.indeed.com/ads/apisearch?publisher=1638164786858930&q='+jobKey+'&l='+city+'&co=in&v=2&format=json&sort=date&limit=25&highlight=0')
     .then((response) => response.json())
     .then((responseJson) => {
this.setState({
  data:responseJson.results,
  isLoading:false
});
     }).catch((error) => {
       this.setState({
         data:'No Internet Connection',
         isLoading:true
       });

     });
  }

  componentDidMount(){

    this.getData();

  }
render() {

  if(this.state.isLoading==true){
    if(this.state.data=="No Internet Connection"){


      return (

        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>

         <Text>{this.state.data+" !"}</Text>
         <TouchableOpacity onPress={()=>this.getData()}>
         <FontAwesome  size={30} name='refresh'></FontAwesome>
         </TouchableOpacity>
         </View>

      );
    } else {

    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>

      <Text>Loading...</Text>
      </View>

    );

  }

  }
  if(this.state.data.length==0){
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>

      <Text>Uff !. Hard Luck !. No Jobs Found !. </Text>
      </View>

    );
  }
  else {return (

  <AppBodyData navigator={this.props.navigator} data={this.state.data}/>
);
} // end else

}


}
module.export = AppBody;
