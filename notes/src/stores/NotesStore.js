import { observable, action } from "mobx";
import React, { Component } from "react";
import {AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class NotesStore {

    @observable categories = [];
    @observable savedCategories=[];

    @observable notes = [];
    @observable savedNotes=[];

    @observable password="";
    @observable savedPass="";





    @action savePass(text){
    // Saving pass to state
    // On changeText
    this.password=text;


    }

    @action asyncSavePass(){
      AsyncStorage.setItem('password', this.password);


    }

    @action checkPass(){
    // Saving pass to db
    // if exists returns pass value
    console.log('Save Pass to db:'+this.password);
    AsyncStorage.getItem('password').then((value)=>{this.savedPass=value;});
    console.log("getpass"+this.savedPass);

    }

    @action async addCategory(text){
      await AsyncStorage.getItem('categories').then((value)=>{

          if(value!=null){
          this.categories=JSON.parse(value);
        }else{


        }

      });
        if (this.categories.indexOf(text) < 0) {
          this.categories.push(text);

        }else{
         alert('Category Exists Already!')
        }
    await  AsyncStorage.setItem('categories', JSON.stringify(this.categories),()=>{this.getCategories()});

    }

    @action async getCategories(){
      await AsyncStorage.getItem('categories').then((value)=>{
        if(value!=null){
        this.savedCategories=JSON.parse(value);
      }else{


      }


      });

    }



    @action async addNote(title,description,category){
      let category_notes=category+'_notes';

      await AsyncStorage.getItem(category_notes).then((value)=>{

        if(value!=null){
        this.notes=JSON.parse(value);
      }else{


      }

      });
    if(title!="" && description!=""){
      let temp_arr=[title,description];
      this.notes.push(temp_arr);

    }else{

      alert("Title,Description are required!");
    }
    AsyncStorage.setItem(category_notes, JSON.stringify(this.notes),()=>{this.getNotes(category)});

    }

    @action async getNotes(category){
      let category_notes=category+'_notes';

      await AsyncStorage.getItem(category_notes).then((value)=>{
        if(value!=null){
        this.savedNotes=JSON.parse(value);
      }else{
      console.log('else');

      }


      });

    }

      @action deleteCategory(category,index){

      this.savedCategories=this.savedCategories.filter((_, i) => i !== index)
      AsyncStorage.setItem('categories', JSON.stringify(this.savedCategories));
      let category_notes=category+'_notes';
      AsyncStorage.removeItem(category_notes);
      }

      @action deleteNote(index,category){

        console.log('here');

      this.savedNotes=this.savedNotes.filter((_, i) => i !== index)

      console.log('deletednotes'+JSON.stringify(this.savedNotes));
      let category_notes=category+'_notes';

      AsyncStorage.setItem(category_notes, JSON.stringify(this.savedNotes));

      }

}
