import React, {Component} from 'react';
    import {Text,View} from 'react-native';


    export default class SideBarContent extends Component{
        constructor() {
            super();
        }
        render()
        {
            return(
                <View style={{backgroundColor:'red',flex:1}}>
                    <Text>Order History</Text>
                    <Text>Account</Text>
                    <Text>Basket</Text>
                    <Text>About us</Text>
                </View>
            );
        }
    }
