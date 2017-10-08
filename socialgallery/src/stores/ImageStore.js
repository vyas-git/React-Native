import { observable, action } from "mobx";
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class ImageStore {

    @observable images = [];
    @observable girdImages = [];
    @observable ListData=[];
    @observable pageIndex = 0;
    @observable isLoading=true;

    @observable image = "https://facebook.github.io/react/img/logo_og.png";
    @observable imageElements=<Text>Loading...</Text>
    @observable modalVisible=false;
    imageIndex=0;
    @observable imageLoadingText=<Text>Loading...</Text>;
    @observable NavigationProps = [];

    @action setModalVisible(visible,imagekey){
     this.image=this.images[imagekey];
     this.modalVisible=visible;
   }



    @action fetchImages(){


          fetch('https://api.imgur.com/3/gallery/search/time/all/0?q_exactly=dhoni', {
            method: 'GET',
            headers: {
              'Authorization':'Client-ID bccffdb2e049ae9',
              'Cache-Control': 'no-cache'

            },

          }).then((response) => response.json()).then((responseJson) => {

            responseJson.data.forEach((data) => {

              if(!data.is_album){
                if(!images.animated){

                let obj={title:data.title,link:data.link,is_album:data.is_album};
             this.images.push(obj);
           }

            }else {
              let obj={title:data.title,is_album:data.is_album};


              data.images.forEach((images)=>{
                  if(!images.animated){
                  obj={...obj,link:images.link}

                this.images.push(obj);
              }

              });

            }
            this.isLoading=false;

          });




           }).catch((error) => {


           });


        }

        @action fetchGridImages(images){
              this.gridImages=[];
              let tempArr=[];
              images.forEach((data)=>{

                tempArr.push(data);
                if(tempArr.length==2){
                  this.gridImages.push(tempArr);
                  tempArr=[];
                }


              });



            }

            @action fetchMoreResults(){


                        fetch('https://api.imgur.com/3/gallery/search/time/all/0?q_exactly=cats', {
                          method: 'GET',
                          headers: {
                            'Authorization':'Client-ID bccffdb2e049ae9',
                          },

                        }).then((response) => response.json()).then((responseJson) => {
                          this.images=[];
                          responseJson.data.forEach((data) => {

                            if(!data.is_album){
                              if(!images.animated){

                              let obj={title:data.title,link:data.link,is_album:data.is_album};
                           this.images.push(obj);
                         }

                          }else {
                            let obj={title:data.title,is_album:data.is_album};


                            data.images.forEach((images)=>{
                              if(!images.animated){

                                obj={...obj,link:images.link}

                              this.images.push(obj);
                            }

                            });

                          }

                          });

                          this.isLoading=false;

                         }).catch((error) => {


                         });


            }


        @action imageHasLoaded(){

          this.imageLoadingText=<Text>l</Text>;
        }

        @action saveNavigationProps(props){

            this.NavigationProps=props;
        }

      @action pageIncrement(){
          this.pageIndex++;
        }
}
