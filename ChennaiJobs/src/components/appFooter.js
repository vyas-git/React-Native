import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';

export default class AppFooter extends Component {
    render() {
        return (
            <Footer style={{backgroundColor:'#263238'}}>
                <FooterTab style={{backgroundColor:'#263238'}}>
                    <Button activeTabStyle={{backgroundColor: '#263238'}}>
                        <Icon style={{color:"white"}}  name="egg"/>
                        <Text style={styles.text}>Feed</Text>
                    </Button>
                    <Button>
                        <Icon style={{color:"white"}} name="paper"/>
                        <Text style={styles.text}>Camera</Text >
                    </Button>
                    <Button>
                        <Icon style={{color:"white"}} active name="person"/>
                        <Text style={styles.text}>About</Text >
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
const styles = StyleSheet.create({
  iconStyle: {
    color: 'white'

  },
  text: {
    color: 'white'
  }
});

module.export = AppFooter;
