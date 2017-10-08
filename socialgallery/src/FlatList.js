import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import { observer, inject } from "mobx-react";
import ImageElements from './components/ImageElements';

@inject("ImageStore")
@observer
class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }
  componentWillMount(){
    this.props.ImageStore.fetchImages();

  }

  componentDidMount() {

    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://api.imgur.com/3/gallery/search/time/all/0?q_exactly=dhoni`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {

        res.data.forEach((data) => {

          if(!data.is_album){
            if(!images.animated){

            let obj={title:data.title,link:data.link,is_album:data.is_album};
            console.log("remote"+obj);

         this.state.data.push(obj);
       }

        }else {
          let obj={title:data.title,is_album:data.is_album};


          data.images.forEach((images)=>{
              if(!images.animated){
              obj={...obj,link:images.link}

              this.state.data.push(obj);
          }

          });

        }

      });
       this.setState({
          data:this.state.data,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    console.log("flat"+this.state.data);
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data.map(function(item) {
            return {
              title: item.title,
              link: item.link
            };
          })}
          renderItem={({ item }) => (

            <Text>Hii</Text>
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}

export default FlatListDemo;
