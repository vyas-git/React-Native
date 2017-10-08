import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;

export default StyleSheet.create({
  container: {
    backgroundColor: '#2B2B2B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  button:{
    height: 50,
    borderRadius: 2,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,

  },
  fullButton:{

    width: window.width - 30,

  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 15,
  },
});
