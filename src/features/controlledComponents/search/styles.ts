import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

const searchStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 16,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  textInput: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  searchButton: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default searchStyles;
