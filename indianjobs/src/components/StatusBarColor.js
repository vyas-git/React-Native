import {NativeModules, processColor } from 'react-native';
const { StatusBarManager } = NativeModules;
export default class statusBar extends Component {
  componentDidMount() {
    StatusBarManager.setColor(processColor('#ff0000'), false);

  }


}
module.export = statusBar;
