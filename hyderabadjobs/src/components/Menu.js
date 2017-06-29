import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,Button
} from 'react-native';

import styles from './styles';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
      </View>
    )
  }
}



module.export = ControlPanel;
