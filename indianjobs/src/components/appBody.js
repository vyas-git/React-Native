import React, {Component} from 'react';
import {Text} from 'react-native';
import AppBodyData from './appBodyData';

export default class AppBody extends Component {
  constructor(){

    super()
    this.state={

      data:[],
      isLoading:true

    }
  }
  getData(){

    return fetch('http://api.indeed.com/ads/apisearch?publisher=1638164786858930&q=java&l=austin&v=2&format=json')
     .then((response) => response.json())
     .then((responseJson) => {
this.setState({
  data:responseJson.results,
  isLoading:true
});
     })
     .catch((error) => {
       console.error(error);
     });
  }

  componentDidMount(){

    this.getData();

  }
render() {
return (
  <AppBodyData data={this.state.data}/>
);
}
}
module.export = AppBody;
