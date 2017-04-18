import React, {Component} from 'react';
import { Image} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppHeader extends Component  {
    render() {
        return (
            <Header>
                <Body>
                <Image source={require('../img/logo.png')}
            style={{width: 100,height: 30}}/>
                </Body>
            </Header>
        );
    }
}
module.export = AppHeader;
