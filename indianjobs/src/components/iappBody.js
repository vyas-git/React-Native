import React, {Component} from 'react';
import {Text,Navigator,View,TouchableOpacity} from 'react-native';
import IAppBodyData from './iappBodyData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class IAppBody extends Component {
  constructor(){

    super()
    this.state={

      data:[],
      isLoading:true,
      connection:true

    }
  }

  getData(){
    return fetch('http://www.indianjobs.co.in/feeds/posts/default/-/Hyderabad%20IT%20Walk-in%20Jobs?published&alt=json')
     .then((response) => response.json())
     .then((responseJson) => {

             this.setState({data:responseJson.feed.entry,isLoading:false});
        }).catch((error) => {
          console.log(error);
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

  }else {
    return (

  <IAppBodyData navigator={this.props.navigator} data={this.state.data}/>
);
} // end else

}


}
module.export = IAppBody;
