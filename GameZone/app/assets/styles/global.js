import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontFamily: 'Molengo-Regular',
    fontSize: 18,
    color: '#333'
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  }
});

export const ratingImages = {
  1: require('../images/rating-1.png'),
  2: require('../images/rating-2.png'),
  3: require('../images/rating-3.png'),
  4: require('../images/rating-4.png'),
  5: require('../images/rating-5.png')
};
