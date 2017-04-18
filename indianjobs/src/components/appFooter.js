import React, {Component} from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';

export default class AppFooter extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="egg"/>
                        <Text>Feed</Text>
                    </Button>
                    <Button>
                        <Icon name="paper"/>
                        <Text >Camera</Text >
                    </Button>
                    <Button >
                        <Icon active name="person"/>
                        <Text >About</Text >
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
module.export = AppFooter;
