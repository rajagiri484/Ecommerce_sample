import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

const listStyles = StyleSheet.create({
  itemContainer: {
    flex: 0.5,
    margin: 5,
    backgroundColor: colors.fadedWhite,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  productImage: {
    width: Dimensions.get('window').width / 2 - 40,
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: colors.black,
  },
  productPrice: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
});
export default listStyles;
