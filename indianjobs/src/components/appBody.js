import React, {Component} from 'react';
import {Text,Navigator,View,TouchableOpacity} from 'react-native';
import AppBodyData from './appBodyData';
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

    return fetch('http://api.indeed.com/ads/apisearch?publisher=1638164786858930&q=java&l=austin&v=2&format=json')
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

  }else {return (

  <AppBodyData navigator={this.props.navigator} data={this.state.data}/>
);
} // end else

}


}
module.export = AppBody;
